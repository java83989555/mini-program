package com.tbc.mini.common.exception;


import com.tbc.mini.support.enums.BaseResponseCode;

/**
 * 服务器相关所有异常处理类
 *
 * @author .
 */
public class ServiceException extends RuntimeException {
    private Integer code;
    private String message;

    public ServiceException(Throwable cause) {
        super(cause);
        this.code = BaseResponseCode.SERVER_ERROR.getCode();
        this.message = cause.getMessage();
    }

    public ServiceException(BaseResponseCode baseResponseCode) {
        super();
        this.code = baseResponseCode.getCode();
        this.message = baseResponseCode.getDesc();
    }

    public ServiceException(Integer code, String message) {
        super();
        this.code = code;
        this.message = message;
    }

    public ServiceException(String message) {
        super();
        this.code = BaseResponseCode.SERVER_ERROR.getCode();
        this.message = message;
    }

    public Integer getCode() {
        return code;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
