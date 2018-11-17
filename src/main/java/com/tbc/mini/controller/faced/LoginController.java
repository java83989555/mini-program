package com.tbc.mini.controller.faced;

import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.modal.pojo.ZaUserExample;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.web.base.BaseController;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.jwt.JwtFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:23
 * @description 小程序用户控制器
 */
@RestController
@RequestMapping("/faced/user/")
public class LoginController extends BaseController {

    @Autowired
    ZaUserService zaUserService;

    @PostMapping(value = "login")
    public ServerResponse test(String phone, String password, HttpServletResponse response) {
        try {
            //todo 验证账号密码
            List<ZaUser> zaUsers = zaUserService.selectByExample(new ZaUserExample());

            String token = JwtFactory.generateUserToken("111");
            response.setHeader("token", token);
            return ServerResponse.createBySuccess(zaUsers);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

}
