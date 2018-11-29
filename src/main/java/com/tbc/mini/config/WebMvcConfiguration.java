package com.tbc.mini.config;

import com.tbc.mini.support.web.interceptor.AdminSecurityInterceptor;
import com.tbc.mini.support.web.interceptor.SecurityInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.*;

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
                .addPathPatterns("/faced/company/**")
                .addPathPatterns("/faced/team/**");

        //后台拦截
        registry.addInterceptor(adminSecurityInterceptor)
                .addPathPatterns("/admin/**")
                .excludePathPatterns(Arrays.asList("/faced/user/**", "/admin/user/login"));

    }


    @Override
    public void addViewControllers(ViewControllerRegistry registry) {

    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }

    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        return corsConfiguration;
    }

    /**
     * 跨域过滤器
     *
     * @return
     */
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", buildConfig());
        return new CorsFilter(source);
    }
}
