package com.tbc.mini.config;

import com.tbc.mini.support.service.listener.ApplicationContextListener;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

/**
 * @author 高巍
 * @createTime 2018年10月23日 15:49
 * @description service配置
 */
@Configuration
public class ServiceConfiguration {
    @Bean
    public ApplicationContextListener applicationContextListener(Environment environment) {
        return new ApplicationContextListener(environment);
    }
}
