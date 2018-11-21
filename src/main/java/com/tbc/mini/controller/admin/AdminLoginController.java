package com.tbc.mini.controller.admin;

import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.BaseResponseCode;
import com.tbc.mini.support.enums.ModelConstant;
import com.tbc.mini.support.web.base.BaseController;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

import static com.tbc.mini.support.enums.ModelConstant.SESSION_KEY_USER;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:27
 * @description 后台登录控制器
 */
@RestController
@RequestMapping("/admin/user/")
public class AdminLoginController extends BaseController {

    @Autowired
    private ZaUserService zaUserService;


    @PostMapping(value = "login")
    public ServerResponse login(HttpServletRequest request, String username, String password) {

        if (request.getSession().getAttribute(SESSION_KEY_USER) != null) {
            return ServerResponse.createByErrorMessage("用户已登录，若要切换用户，请先退出系统。");
        }
        if (StringUtils.isBlank(username)) {
            return ServerResponse.createByErrorCodeMessage(BaseResponseCode.NULL_USER.getCode(),BaseResponseCode.NULL_USER.getDesc());
        }
        if (StringUtils.isBlank(password)) {
            return ServerResponse.createByErrorCodeMessage(BaseResponseCode.NULL_PWD.getCode(),BaseResponseCode.NULL_PWD.getDesc());
        }
        ServerResponse<ZaUser> response = zaUserService.login(username,password);
        if(response.isSuccess()){
            ZaUser user = response.getData();
            //管理员校验
            if(user.getLevel().equals(ModelConstant.ZaUserLevel.MANAGER.getLevel())){
                request.getSession().setAttribute(ModelConstant.SESSION_KEY_USER,user);
                return response;
            }else{
                return ServerResponse.createByErrorCodeMessage(BaseResponseCode.NEED_MANAGER_LOGIN.getCode(),BaseResponseCode.NEED_MANAGER_LOGIN.getDesc());
            }
        }
        return response;
    }


    /**
     * 登出
     *
     * @param request
     * @return
     */
    @GetMapping(value = "logout")
    public ServerResponse logout(HttpServletRequest request) {
        request.getSession().removeAttribute(ModelConstant.SESSION_KEY_USER);
        return ServerResponse.createBySuccess();

    }


    @GetMapping(value = "sessionGet")
    public ServerResponse sessionUser() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
                .getRequest();
        return ServerResponse.createBySuccess(request.getSession().getAttribute(ModelConstant.SESSION_KEY_USER));
    }
}
