package com.tbc.mini.support.web.bind;

import com.tbc.mini.support.web.bind.support.DateConvertEditor;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.InitBinder;

import java.util.Date;

/**
 * Created by GV
 * DATE:2017/7/24
 * TIME:下午9:31
 * 解决请求方法Date参数的绑定问题
 */
@ControllerAdvice
public class InitBinderAdvice {

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
//        webDataBinder.setDisallowedFields("token"); //此处演示忽略其中一个参数
        //处理
        webDataBinder.registerCustomEditor(Date.class, new DateConvertEditor());
    }

}
