package com.tbc.mini.support.web.interceptor;

import com.tbc.mini.common.exception.ServiceException;
import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.BaseResponseCode;
import com.tbc.mini.support.enums.ModelConstant;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author 高巍
 * @createTime 2018年11月01日 14:19
 * @description 管理后台安全拦截器
 */
@Slf4j
@Component
public class AdminSecurityInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        ZaUser user = (ZaUser) request.getSession().getAttribute(ModelConstant.SESSION_KEY_USER);
        if (user == null || !user.getLevel().equals(ModelConstant.ZaUserLevel.MANAGER.getLevel())) {
            //登录与管理员校验
            throw new ServiceException(BaseResponseCode.NEED_LOGIN.getCode(),BaseResponseCode.NEED_LOGIN.getDesc());
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
