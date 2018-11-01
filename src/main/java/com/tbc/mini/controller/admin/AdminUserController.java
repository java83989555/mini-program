package com.tbc.mini.controller.admin;

import com.tbc.mini.support.web.base.BaseController;
import com.tbc.mini.support.entity.ServerResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:22
 * @description 后台管理员控制器
 */
@RestController
@RequestMapping("/admin/user/")
public class AdminUserController extends BaseController {


    @GetMapping(value = "test")
    public ServerResponse test(String name) {
        try {
            String username = name;
            return ServerResponse.createBySuccess();
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }
    
    


}
