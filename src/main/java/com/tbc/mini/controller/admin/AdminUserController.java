package com.tbc.mini.controller.admin;

import com.tbc.mini.common.exception.ParamsException;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.enums.ModelConstant;
import com.tbc.mini.support.web.base.BaseController;
import com.tbc.mini.support.entity.ServerResponse;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Date;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:22
 * @description 后台管理员控制器
 */
@RestController
@RequestMapping("/admin/user/")
public class AdminUserController extends BaseController {


    @Autowired
    private ZaUserService zaUserService;

    private static final Integer ORG_ID = 1;
    private static final String ORG_NAME = "百达资本";

    @PostMapping(value = "list")
    public ServerResponse list(String username,String realname,
                               @RequestParam(value = "pageNum",required = false,defaultValue = "1")int pageNum,
                               @RequestParam(value = "pageSize",required = false,defaultValue = "10")int pageSize) {

        try {
            return zaUserService.getUserList(username,realname,pageNum,pageSize);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 新增用戶
     * @param user
     * @return
     */
    @PostMapping(value = "add")
    public ServerResponse add(ZaUser user) {
        try {
            this.verifyUser(user);
            if(StringUtils.isBlank(user.getUsername())){
                user.setPassword(user.getUsername());
            }
            user.setStatus(ModelConstant.ZaUserStatus.NORMAL.getStatus());
            if(null == user.getOrgId()){
                user.setOrgId(ORG_ID);
            }
            if(StringUtils.isBlank(user.getOrgName())){
                user.setUsername(ORG_NAME);
            }
            user.setRegisterTime(new Date());
            return zaUserService.createZaUser(user);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 修改用戶信息
     * @param user
     * @return
     */
    @PostMapping(value = "update")
    public ServerResponse update(ZaUser user) {
        try {
            this.verifyUser(user);
            return zaUserService.modifyZaUser(user);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 启用
     * @param id
     * @return
     */
    @PostMapping(value = "start")
    public ServerResponse start( Integer id) {
        try {
            ZaUser user = new ZaUser();
            user.setId(id);
            user.setStatus(ModelConstant.ZaUserStatus.NORMAL.getStatus());
            ServerResponse response = zaUserService.modifyZaUser(user);
            if(!response.isSuccess()){
                return ServerResponse.createBySuccess("启用失败");
            }
            return ServerResponse.createBySuccess("启用成功");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 停用
     * @param id
     * @return
     */
    @PostMapping(value = "stop")
    public ServerResponse stop(Integer id) {
        try {
            ZaUser user = new ZaUser();
            user.setId(id);
            user.setStatus(ModelConstant.ZaUserStatus.DEAD.getStatus());
            ServerResponse response = zaUserService.modifyZaUser(user);
            if(!response.isSuccess()){
                return ServerResponse.createBySuccess("停用失败");
            }
            return ServerResponse.createBySuccess("停用成功");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 删除
     * @param id
     * @return
     */
    @PostMapping(value = "delete")
    public ServerResponse delete(Integer id) {
        try {
            ZaUser user = new ZaUser();
            user.setId(id);
            user.setStatus(ModelConstant.ZaUserStatus.DELETE.getStatus());
            ServerResponse response = zaUserService.modifyZaUser(user);
            if(!response.isSuccess()){
                return ServerResponse.createBySuccess("停用失败");
            }
            return ServerResponse.createBySuccess("停用成功");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    private void verifyUser(ZaUser user){
        if (user == null) {
            throw new ParamsException("用户信息未填写");
        }
        if(user.getLevel()==null){
            throw new ParamsException("用户级别不能为空");
        }
        if (StringUtils.isBlank(user.getRealname())) {
            throw new ParamsException("用户姓名不能为空");
        }
        if (StringUtils.isBlank(user.getUsername())) {
            throw new ParamsException("登陆账户不能为空");
        }
    }

}
