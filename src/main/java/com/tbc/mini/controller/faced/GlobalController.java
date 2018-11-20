package com.tbc.mini.controller.faced;

import com.tbc.mini.common.utils.JsonUtils;
import com.tbc.mini.modal.pojo.Organization;
import com.tbc.mini.modal.pojo.OrganizationExample;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.service.OrganizationService;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.base.BaseController;
import com.tbc.mini.support.web.jwt.JwtFactory;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:23
 * @description 全局参数控制器
 */
@RestController
@RequestMapping("/faced/global/")
public class GlobalController extends BaseController {

    @Autowired
    OrganizationService organizationService;

    @GetMapping(value = "aboutUs")
    public ServerResponse param() {
        try {
            HashMap<String, Object> result = new HashMap(16);
            Organization organization = organizationService.selectByPrimaryKey(NumberUtils.INTEGER_ONE);
            //关于我们
            result.put("mainImg", organization.getMainImg());
            result.put("intro", organization.getIntro());
            return ServerResponse.createBySuccess(result);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    @GetMapping(value = "bannerList")
    public ServerResponse bannerList() {
        try {
            HashMap<String, Object> result = new HashMap(16);
            Organization organization = organizationService.selectByPrimaryKey(NumberUtils.INTEGER_ONE);
            //轮播图地址
            result.put("bannerList", JsonUtils.jsonToList(organization.getSubImg(), String.class));
            return ServerResponse.createBySuccess(result);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    @GetMapping(value = "contactUs")
    public ServerResponse contactUs() {
        try {
            HashMap<String, Object> result = new HashMap(16);
            Organization organization = organizationService.selectByPrimaryKey(NumberUtils.INTEGER_ONE);
            //联系我们
            result.put("phone", organization.getPhone());
            result.put("address", organization.getAddr());
            return ServerResponse.createBySuccess(result);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

}
