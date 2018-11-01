package com.tbc.mini.support.enums;

/**
 * DATE:2017/6/18
 * TIME:下午3:57
 *
 * @author gv
 */
public enum BaseResponseCode {

    /**
     * 常用
     */
    SUCCESS(1, "SUCCESS"),
    SERVER_ERROR(2, "服务器繁忙，请稍后重试"),
    ILLEGAL_ARGUMENT(3, "请求参数异常"),
    ILLEGAL_HEADER_ARGUMENT(4, "请求头部参数异常"),
    NULL_PWD(5,"密码不能为空"),
    NULL_USER(6,"用户名不能为空"),
    PWD_ERROR(7,"密码错误"),
    NONE_USER(8,"用户不存在"),
    LOCKED_USER(9,"用户已被锁定"),
    USER_EXISTED(10, "用户已存在"),

    /**
     * 全局
     */
    REQUEST_NOT_FOUND(404, "您访问对页面不存在"),
    REQUEST_TYPE_ERROR(405, "请求类型错误，请确认后重试"),
    TOKEN_NULL(998, "token未传递"),
    TOKEN_ERROR(999, "token错误或失效，请重新登录"),
    NEED_LOGIN(1000,"需要登录"),
    ;

    private final Integer code;
    private final String desc;

    BaseResponseCode(Integer code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    public Integer getCode() {
        return code;
    }

    public String getDesc() {
        return desc;
    }

}
