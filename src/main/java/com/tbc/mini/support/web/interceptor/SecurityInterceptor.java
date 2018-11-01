package com.tbc.mini.support.web.interceptor;

import com.tbc.mini.common.exception.TokenErrorException;
import com.tbc.mini.support.web.jwt.JwtFactory;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tbc.mini.common.exception.TokenNullException;

/**
 * @author 高巍
 * @createTime 2018年11月01日 13:43
 * @description 小程序安全拦截器
 */
@Slf4j
@Component
public class SecurityInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("token");
        if (token == null) {
            throw new TokenNullException();
        }
        String userId = JwtFactory.getTokenUserId(token);
        if (userId == null) {
            throw new TokenErrorException();
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
