package com.tbc.mini.support.web.exception;

import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.BaseResponseCode;
import com.tbc.mini.common.exception.TokenErrorException;
import com.tbc.mini.common.exception.TokenNullException;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.rmi.ServerException;

/**
 * DATE:2017/5/1
 * TIME:上午11:04
 *
 * @author gv
 */

@ControllerAdvice
@Slf4j
public class ExceptionHandlerAdvice {


    /**
     * 拦截500异常，空指针异常
     *
     * @param ex
     * @return
     */
    @ResponseBody
    @ExceptionHandler(value = NullPointerException.class)
    @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
    public Object nullPointerException(Exception ex) {
        return ServerResponse.createByErrorMessage("服务器意外出现空指针异常");
    }

    /**
     * 拦截处理404错误
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(value = NoHandlerFoundException.class)
    @ResponseBody
    public Object handleNoHandlerFoundException(NoHandlerFoundException ex) {
        return ServerResponse.createByErrorCodeMessage(BaseResponseCode.REQUEST_NOT_FOUND);
    }

    /**
     * 业务异常
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(value = ServerException.class)
    @ResponseBody
    public Object serviceException(ServerException ex) {
        return ServerResponse.createByErrorMessage(ex.getMessage());
    }


    /**
     * 拦截处理token未传递异常
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(value = TokenNullException.class)
    @ResponseBody
    public Object tokenNullException(TokenNullException ex) {
        return ServerResponse.createByErrorCodeMessage(BaseResponseCode.TOKEN_NULL.getCode(), BaseResponseCode.TOKEN_NULL.getDesc());
    }

    /**
     * 拦截处理token未传递异常
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(value = TokenErrorException.class)
    @ResponseBody
    public Object tokenErrorException(TokenErrorException ex) {
        return ServerResponse.createByErrorCodeMessage(BaseResponseCode.TOKEN_ERROR.getCode(), BaseResponseCode.TOKEN_ERROR.getDesc());
    }


    /**
     * 请求类型
     *
     * @param ex
     * @return
     */
    @ExceptionHandler(value = HttpRequestMethodNotSupportedException.class)
    @ResponseBody
    public Object methodNotSupported(Exception ex) {
        return ServerResponse.createByErrorCodeMessage(BaseResponseCode.REQUEST_TYPE_ERROR);
    }

    /**
     * @param ex
     * @return
     */
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public Object exception(Exception ex) {
        log.error("非预期内异常:{}", ex);
        return ServerResponse.createByError();
    }


}
