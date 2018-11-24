package com.tbc.mini.service;

import com.tbc.mini.modal.pojo.CompanyInfo;
import com.tbc.mini.modal.pojo.CompanyInfoExample;
import com.tbc.mini.modal.vo.CompanyInfoAdminVo;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.service.base.BaseService;


/**
* @author 高巍
* on 2018/11/01 14:28:37
* CompanyInfoService接口
*/
public interface CompanyInfoService extends BaseService<CompanyInfo, CompanyInfoExample> {

    /**
     * 机构详情
     * @param id
     * @return
     */
    public ServerResponse<CompanyInfoAdminVo> detail(Integer id);

    /**
     * 新建机构
     * @param info
     * @return
     */
    public ServerResponse<CompanyInfo> addCompany(CompanyInfo info);

    /**
     * 修改机构
     * @param info
     * @return
     */
    public ServerResponse<String> updateCompany(CompanyInfo info);


    /**
     * 删除机构
     * @param id
     * @return
     */
    public ServerResponse<String> deleteCompany(Integer id);

}