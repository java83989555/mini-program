package com.tbc.mini.service.impl;

import com.tbc.mini.support.service.annotation.BaseService;
import com.tbc.mini.support.service.base.BaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import com.tbc.mini.mapper.OrganizationMapper;
import com.tbc.mini.modal.pojo.Organization;
import com.tbc.mini.modal.pojo.OrganizationExample;
import com.tbc.mini.service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
* @author 高巍
* on 2018/11/01 14:28:38
* OrganizationService接口实现类
*/

@org.springframework.stereotype.Service
@BaseService
@Slf4j
public class OrganizationServiceImpl extends BaseServiceImpl<OrganizationMapper, Organization, OrganizationExample> implements OrganizationService {

    @Autowired
    private OrganizationMapper organizationMapper;


}