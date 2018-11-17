package com.tbc.mini.common.exception;


import com.tbc.mini.support.enums.BaseResponseCode;

/**
 * 参数相关所有异常处理类
 *
 * @author .
 */
public class ParamsException extends RuntimeException {
    private Integer code;
    private String message;

    public ParamsException(Throwable cause) {
        super(cause);
        this.code = BaseResponseCode.SERVER_ERROR.getCode();
        this.message = cause.getMessage();
    }

    public ParamsException(BaseResponseCode baseResponseCode) {
        super();
        this.code = baseResponseCode.getCode();
        this.message = baseResponseCode.getDesc();
    }

    public ParamsException(Integer code, String message) {
        super();
        this.code = code;
        this.message = message;
    }

    public ParamsException(String message) {
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
