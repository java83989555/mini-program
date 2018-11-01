package com.tbc.mini.support.entity;


import com.tbc.mini.support.enums.BaseResponseCode;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.Serializable;
import java.util.Objects;

/**
 * Created by GV
 * DATE:2017/6/18
 * TIME:下午3:38
 * 保证序列化json的时候,如果是null的对象,key也会消失
 */

@JsonSerialize(include =  JsonSerialize.Inclusion.NON_NULL)
public class ServerResponse<T> implements Serializable {
    private Integer code;
    private T data;
    private String msg;

    private ServerResponse(int code)
    {
        this.code = code;
    }

    private ServerResponse(int code, T data){
        this.code = code;
        this.data = data;
    }

    private ServerResponse(int code, String msg, T data){
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    private ServerResponse(int code, String msg){
        this.code = code;
        this.msg = msg;
    }

    /**
     * 使之不在json序列化结果当中
     * @return
     */
    @JsonIgnore
    public boolean isSuccess(){
        return Objects.equals(this.code, BaseResponseCode.SUCCESS.getCode());
    }

    public Integer getCode()
    {
        return code;
    }

    public T getData() {
        return data;
    }

    public String getMsg() {
        return msg;
    }


    public static <T> ServerResponse<T> createBySuccess(){
        return new ServerResponse<T>(BaseResponseCode.SUCCESS.getCode());
    }

    public static <T> ServerResponse<T> createBySuccessMessage(String msg){
        return new ServerResponse<T>(BaseResponseCode.SUCCESS.getCode(),msg);
    }

    public static <T> ServerResponse<T> createBySuccess(T data){
        return new ServerResponse<T>(BaseResponseCode.SUCCESS.getCode(),data);
    }

    public static <T> ServerResponse<T> createBySuccess(String msg,T data){
        return new ServerResponse<T>(BaseResponseCode.SUCCESS.getCode(),msg,data);
    }

    public static <T> ServerResponse<T> createByError(){
        return new ServerResponse<T>(BaseResponseCode.SERVER_ERROR.getCode(),BaseResponseCode.SERVER_ERROR.getDesc());
    }

    public static <T> ServerResponse<T> createByErrorMessage(String errorMessage){
        return new ServerResponse<T>(BaseResponseCode.SERVER_ERROR.getCode(),errorMessage);
    }

    public static <T> ServerResponse<T> createByErrorCodeMessage(int errorCode,String errorMessage){
        return new ServerResponse<T>(errorCode,errorMessage);
    }

    public static <T> ServerResponse<T> createByErrorCodeMessageAndData(int errorCode,String errorMessage,T data){
        return new ServerResponse<T>(errorCode,errorMessage,data);
    }
    public static <T> ServerResponse<T> createByErrorCodeMessage(BaseResponseCode code) {
        return new ServerResponse<T>(code.getCode(),code.getDesc());
    }

    public static <T> ServerResponse<T>createParamError(){
        return new ServerResponse<T>(BaseResponseCode.ILLEGAL_ARGUMENT.getCode(),BaseResponseCode.ILLEGAL_ARGUMENT.getDesc());
    }



    @Override
    public String toString() {
        return "ServerResponse{" +
                "code=" + code +
                ", data=" + data +
                ", msg='" + msg + '\'' +
                '}';
    }


}
