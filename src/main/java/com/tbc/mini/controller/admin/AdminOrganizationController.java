package com.tbc.mini.controller.admin;

import com.tbc.mini.modal.pojo.Organization;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.service.OrganizationService;
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
 * @description 分公司控制器
 * TODO 暂时无需求
 */
@RestController
@RequestMapping("/admin/org/")
public class AdminOrganizationController extends BaseController {


    @Autowired
    private OrganizationService organizationService;


    /**
     * 分公司列表
     * @param request
     * @return
     */
    @GetMapping(value = "list")
    public ServerResponse list(HttpServletRequest request) {
        try {
            //TODO

            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 新增分公司
     * @param organization
     * @return
     */
    @PostMapping(value = "add")
    public ServerResponse add(Organization organization) {
        try {
            //TODO

            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 修改分公司
     * @param organization
     * @return
     */
    @PostMapping(value = "update")
    public ServerResponse update(Organization organization) {
        try {
            //TODO

            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 删除分公司
     * @param request
     * @param id
     * @return
     */
    @PostMapping(value = "delete")
    public ServerResponse start(HttpServletRequest request, Integer id) {
        try{
            //TODO
            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }





}
