package com.tbc.mini.service.impl;

import com.tbc.mini.support.service.annotation.BaseService;
import com.tbc.mini.support.service.base.BaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import com.tbc.mini.mapper.CompanyInfoMapper;
import com.tbc.mini.modal.pojo.CompanyInfo;
import com.tbc.mini.modal.pojo.CompanyInfoExample;
import com.tbc.mini.service.CompanyInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
* @author 高巍
* on 2018/11/01 14:28:37
* CompanyInfoService接口实现类
*/

@org.springframework.stereotype.Service
@BaseService
@Slf4j
public class CompanyInfoServiceImpl extends BaseServiceImpl<CompanyInfoMapper, CompanyInfo, CompanyInfoExample> implements CompanyInfoService {

    @Autowired
    private CompanyInfoMapper companyInfoMapper;


}