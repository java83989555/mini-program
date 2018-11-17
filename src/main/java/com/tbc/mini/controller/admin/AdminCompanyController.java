package com.tbc.mini.controller.admin;

import com.tbc.mini.modal.pojo.CompanyInfo;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.service.CompanyInfoService;
import com.tbc.mini.service.TeamService;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.ModelConstant;
import com.tbc.mini.support.web.base.BaseController;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

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
    @Autowired
    private TeamService teamService;


    /**
     * 机构列表
     * @return
     */
    @GetMapping(value = "list")
    public ServerResponse list(HttpServletRequest request) {

        return ServerResponse.createBySuccess();
    }


    /**
     * 新增
     * @param info
     * @return
     */
    @PostMapping(value = "add")
    public ServerResponse add(CompanyInfo info) {
        try {


            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 修改
     * @param user
     * @return
     */
    @PostMapping(value = "update")
    public ServerResponse update(ZaUser user) {
        try {


            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 删除
     * @param request
     * @param id
     * @return
     */
    @PostMapping(value = "delete")
    public ServerResponse start(HttpServletRequest request, Integer id) {
        ZaUser user = new ZaUser();


        return ServerResponse.createBySuccess();
    }




}
