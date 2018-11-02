package com.tbc.mini.controller.admin;

import com.sun.scenario.effect.PerspectiveTransform;
import com.sun.scenario.effect.impl.prism.sw.PSWRenderer;
import com.sun.xml.internal.bind.v2.runtime.reflect.Accessor;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.enums.ModelConstant;
import com.tbc.mini.support.web.base.BaseController;
import com.tbc.mini.support.entity.ServerResponse;
import oracle.jvm.hotspot.jfr.GlobalTraceBuffer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

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


    @ResponseBody
    @PostMapping(value = "list")
    public ServerResponse list(Integer orgId) {

        return ServerResponse.createBySuccess();
    }


    /**
     * 新增用戶
     * @param user
     * @return
     */
    @ResponseBody
    @PostMapping(value = "add")
    public ServerResponse add(ZaUser user) {
        try {


            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 修改用戶信息
     * @param user
     * @return
     */
    @ResponseBody
    @PostMapping(value = "update")
    public ServerResponse update(ZaUser user) {
        try {


            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 启用
     * @param request
     * @param id
     * @return
     */
    @ResponseBody
    @PostMapping(value = "start")
    public ServerResponse start(HttpServletRequest request, Integer id) {
        ZaUser user = new ZaUser();
        user.setId(id);
        user.setStatus(ModelConstant.ZaUserStatus.NORMAL.getStatus());

        return ServerResponse.createBySuccess();
    }

    /**
     * 停用
     * @param request
     * @param id
     * @return
     */

    @ResponseBody
    @PostMapping(value = "/stop")
    public ServerResponse stop(HttpServletRequest request, Integer id) {
        ZaUser user = new ZaUser();
        user.setId(id);
        user.setStatus(ModelConstant.ZaUserStatus.DEAD.getStatus());


        return ServerResponse.createByErrorMessage("停用失败");
    }



}
