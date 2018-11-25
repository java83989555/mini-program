package com.tbc.mini.controller.faced;

import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.modal.pojo.ZaUserExample;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.enums.BaseResponseCode;
import com.tbc.mini.support.web.base.BaseController;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.jwt.JwtFactory;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
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
            if (StringUtils.isBlank(phone) || StringUtils.isBlank(password)) {
                return ServerResponse.createByErrorCodeMessage(BaseResponseCode.ILLEGAL_ARGUMENT);
            }
            ServerResponse<ZaUser> login = zaUserService.login(phone, password);
            ZaUser zaUser=login.getData();
            if (login.isSuccess()) {
                String token = JwtFactory.generateUserToken(String.valueOf(zaUser.getId()));
                response.setHeader("token", token);
                HashMap<String, String> result = new HashMap<>(16);
                result.put("token", token);
                result.put("phone", phone);
                return ServerResponse.createBySuccess(result);
            }
            return login;
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

}
