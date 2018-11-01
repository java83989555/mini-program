package com.tbc.mini.support.web.base;

import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.common.exception.ServiceException;
import lombok.extern.slf4j.Slf4j;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:44
 * @description 控制层基类
 */
@Slf4j
public class BaseController {

    /**
     * 根据状态枚举响应失败结果
     */
    protected <T> ServerResponse<T> errorParsing(Exception e) {
        log.error(e.getMessage(), e);
        if (e instanceof ServiceException) {
            ServiceException serviceException = (ServiceException) e;
            if (null != serviceException.getCode()) {
                return ServerResponse.createByErrorCodeMessage(serviceException.getCode(), serviceException.getMessage());
            }
            return ServerResponse.createByErrorMessage(e.getMessage());
        }
        return ServerResponse.createByError();
    }
}
