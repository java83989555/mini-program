package com.tbc.mini.config;

import com.tbc.mini.support.web.interceptor.AdminSecurityInterceptor;
import com.tbc.mini.support.web.interceptor.SecurityInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;

/**
 * @author 高巍
 * @createTime 2018年09月01日 08:43
 * @description WebMvc配置
 */
@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {

    @Autowired
    SecurityInterceptor securityInterceptor;

    @Autowired
    AdminSecurityInterceptor adminSecurityInterceptor;


    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //小程序安全拦截器
        registry.addInterceptor(securityInterceptor)
                .addPathPatterns("/faced/user/**")
                .excludePathPatterns(Arrays.asList("/faced/user/login","/admin/**"));

        //后台拦截
        registry.addInterceptor(adminSecurityInterceptor)
                .addPathPatterns("/admin/**")
                .excludePathPatterns(Arrays.asList("/faced/user/**","/admin/user/login"));

    }


    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

    }


}
