package com.tbc.mini.service;

import com.github.pagehelper.PageInfo;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.modal.pojo.ZaUserExample;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.service.base.BaseService;


/**
* @author 高巍
* on 2018/11/01 14:28:38
* ZaUserService接口
*/
public interface ZaUserService extends BaseService<ZaUser, ZaUserExample> {

    /**
     * 登录
     * @param username
     * @param password
     * @return
     */
    public ServerResponse<ZaUser> login(String username, String password);
    /**
     * 用户列表
     * @param username
     * @param realname
     * @param pageNum
     * @param pageSize
     * @return
     */
    public ServerResponse<PageInfo> getUserList(String username, String  realname, int pageNum, int pageSize);
    /**
     * 新建用户
     * @param zaUser
     * @return
     */
    public ServerResponse<ZaUser> createZaUser(ZaUser zaUser);

    /**
     * 修改用户
     * @param zaUser
     * @return
     */
    public ServerResponse<String> modifyZaUser(ZaUser zaUser);
}