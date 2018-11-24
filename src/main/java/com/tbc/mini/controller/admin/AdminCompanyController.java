package com.tbc.mini.controller.admin;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.tbc.mini.modal.pojo.CompanyInfo;
import com.tbc.mini.modal.pojo.CompanyInfoExample;
import com.tbc.mini.service.CompanyInfoService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.base.BaseController;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:22
 * @description 后台机构控制器
 */
@RestController
@RequestMapping("/admin/company/")
public class AdminCompanyController extends BaseController {


    @Autowired
    private CompanyInfoService companyInfoService;


    /**
     * 机构列表
     * @return
     */
    @GetMapping(value = "list")
    public ServerResponse list(String name,HttpServletRequest request, @RequestParam(value = "pageNum",required = false,defaultValue = "1")int pageNum,
                               @RequestParam(value = "pageSize",required = false,defaultValue = "1")int pageSize) {
        try {
            CompanyInfoExample example = new CompanyInfoExample();
            CompanyInfoExample.Criteria criteria = example.createCriteria();
            if(StringUtils.isNotBlank(name)){
                criteria.andNameEqualTo(name);
            }
            Page<Object> page = PageHelper.startPage(pageNum, pageSize, true);
            List<CompanyInfo> companyInfoList = companyInfoService.selectByExample(example);
            Map<String,Object> map = new HashMap<>();
            map.put("data",companyInfoList);
            map.put("count",page.getTotal());
            return ServerResponse.createBySuccess(map);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 机构详情
     * @return
     */
    @GetMapping(value = "detail")
    public ServerResponse detail(Integer id) {
        try {
            return companyInfoService.detail(id);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 新增
     * @param info
     * @return
     */
    @PostMapping(value = "add")
    public ServerResponse add(CompanyInfo info) {
        try {
            return companyInfoService.addCompany(info);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 修改
     * @param info
     * @return
     */
    @PostMapping(value = "update")
    public ServerResponse update(CompanyInfo info) {
        try {
            return companyInfoService.updateCompany(info);
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
            return companyInfoService.deleteCompany(id);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }





}
