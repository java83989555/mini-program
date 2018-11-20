package com.tbc.mini.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.tbc.mini.common.exception.ParamsException;
import com.tbc.mini.common.utils.JsonUtils;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.ModelConstant;
import com.tbc.mini.support.service.annotation.BaseService;
import com.tbc.mini.support.service.base.BaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import com.tbc.mini.mapper.ZaUserMapper;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.modal.pojo.ZaUserExample;
import com.tbc.mini.service.ZaUserService;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author 高巍
 * on 2018/11/01 14:28:38
 * ZaUserService接口实现类
 */

@org.springframework.stereotype.Service
@BaseService
@Slf4j
public class ZaUserServiceImpl extends BaseServiceImpl<ZaUserMapper, ZaUser, ZaUserExample> implements ZaUserService {

    @Autowired
    private ZaUserMapper zaUserMapper;


    private final static String algorithmName = "md5";


    @Override
    public ServerResponse<ZaUser> login(String username, String password) {

        ServerResponse<ZaUser> validResponse = this.checkUsername(username);
        if (!validResponse.isSuccess()) {
            return ServerResponse.createByErrorMessage("用户名不存在");
        }
        //Filter DEAD ZaUser
        ZaUser dbUser = validResponse.getData();
        Integer status = dbUser.getStatus();
        if (null == status || status.equals(ModelConstant.ZaUserStatus.DEAD.getStatus())) {
            return ServerResponse.createByErrorMessage("该用户已停用");
        }
        // encrypt the new pwd with username and salt
        String dbPwdString = dbUser.getPassword();
        dbUser.setPassword(password);
        encryptPassword(dbUser);
        if (!dbPwdString.equals(dbUser.getPassword())) {
            return ServerResponse.createByErrorMessage("密码不正确！");
        }
        return ServerResponse.createBySuccess(dbUser);

    }

    @Override
    public ServerResponse<PageInfo> getUserList(String username, String realname, int pageNum, int pageSize) {
        PageHelper.startPage(pageNum, pageSize);
        ZaUserExample example = new ZaUserExample();
        ZaUserExample.Criteria criteria = example.createCriteria();
        if (StringUtils.isNotBlank(username)) {
            criteria.andUsernameLike(username);
        }
        if (StringUtils.isNotBlank(realname)) {
            criteria.andUsernameLike(realname);
        }
        criteria.andStatusNotEqualTo(ModelConstant.ZaUserStatus.DELETE.getStatus());
        List<ZaUser> userList = zaUserMapper.selectByExample(example);
        PageInfo pageResult = new PageInfo(userList);
        pageResult.setList(userList);
        return ServerResponse.createBySuccess(pageResult);
    }


    @Override
    public ServerResponse<ZaUser> createZaUser(ZaUser zaUser) {
        if (zaUser == null || StringUtils.isEmpty(zaUser.getUsername()) || StringUtils.isEmpty(zaUser.getPassword())) {
            return ServerResponse.createByErrorMessage("用户名和密码不能为空！");
        }
        ServerResponse validResponse = this.checkUsername(zaUser.getUsername());
        if (!validResponse.isSuccess()) {
            return validResponse;
        }
        Integer rs = zaUserMapper.insert(encryptPassword(zaUser));
        if (rs != null && rs > 0) {
            return ServerResponse.createBySuccess(zaUser);
        } else {
            return ServerResponse.createByErrorMessage("创建失败");
        }
    }

    @Override
    public ServerResponse<String> modifyZaUser(ZaUser zaUser) {
        if (zaUser.getPassword() != null) {
            encryptPassword(zaUser);
        }
        Integer rs = zaUserMapper.updateByPrimaryKeySelective(zaUser);
        if (rs != null && rs > 0) {
            return ServerResponse.createBySuccess("修改成功");
        } else {
            return ServerResponse.createByErrorMessage("修改失败");
        }
    }


    /**
     * 校验用户名
     *
     * @param username
     * @return
     */
    private ServerResponse<ZaUser> checkUsername(String username) {
        ZaUserExample example = new ZaUserExample();
        example.createCriteria().andUsernameEqualTo(username).andStatusNotEqualTo(ModelConstant.ZaUserStatus.DELETE.getStatus());
        List<ZaUser> userList = zaUserMapper.selectByExample(example);
        if (null != userList && !userList.isEmpty()) {
            return ServerResponse.createBySuccess(userList.get(0));
        }
        return ServerResponse.createByErrorMessage("用户名已存在");
    }

    /**
     * 密码处理
     */
    private ZaUser encryptPassword(ZaUser user) {
        int hashIterations = 2;
        if (StringUtils.isEmpty(user.getSalt())) {
            user.setSalt((new SecureRandomNumberGenerator()).nextBytes().toHex());
        }
        String encryptedPassword = new SimpleHash(algorithmName, user.getPassword(), ByteSource.Util.bytes(user.getUsername()
                + user.getSalt()), hashIterations).toHex();
        user.setPassword(encryptedPassword);
        return user;
    }


}