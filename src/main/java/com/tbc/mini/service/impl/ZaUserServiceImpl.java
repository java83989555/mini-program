package com.tbc.mini.service.impl;

import com.tbc.mini.support.service.annotation.BaseService;
import com.tbc.mini.support.service.base.BaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import com.tbc.mini.mapper.ZaUserMapper;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.modal.pojo.ZaUserExample;
import com.tbc.mini.service.ZaUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

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


}