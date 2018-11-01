package com.tbc.mini.support.web.aspect;

import com.tbc.mini.common.utils.JsonUtils;
import javassist.*;
import javassist.bytecode.CodeAttribute;
import javassist.bytecode.LocalVariableAttribute;
import javassist.bytecode.MethodInfo;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Arrays;
import java.util.HashMap;

/**
 * AOP切面日志父类
 * extends BaseLogAspect
 *
 * @author gv
 */

public abstract class BaseLogAspect {
    protected final Logger LOG = LoggerFactory.getLogger(BaseLogAspect.class);
    private Long startTime = 0L;

    /**
     * 环绕通配符方式
     *
     * @param pjp
     * @return
     * @throws Throwable
     */
    public abstract Object aroundControllerMethod(final ProceedingJoinPoint pjp) throws Throwable;


    /**
     * 执行controller层方法前执行
     */
    protected void logBefore(JoinPoint joinPoint) throws NotFoundException, ClassNotFoundException {
        String classType = joinPoint.getTarget().getClass().getName();
        Class<?> clazz = Class.forName(classType);
        String clazzName = clazz.getName();

        String className = joinPoint.getThis().toString();
        //获得方法名
        String methodName = joinPoint.getSignature().getName();
        startTime = System.currentTimeMillis();
        LOG.warn("[{}] ================== controller log start  ===================", Thread.currentThread().getName());
        LOG.warn("1.当前类为：{},调用的方法开始：{}", clazzName, methodName);

        //获得参数列表
        Object[] args = joinPoint.getArgs();
        if (args.length <= 0) {
            LOG.warn(methodName + " 方法没有参数");
        } else {
            String[] paramNames = getFieldsName(this.getClass(), clazzName, methodName);
            HashMap<String, Object> param = new HashMap<String, Object>(paramNames.length);
            for (int i = 0; i < args.length; i++) {
                if (args[i] != null && args[i].getClass().isArray()) {
                    param.put(paramNames[i], Arrays.toString((Object[]) args[i]));
                } else if (!(args[i] instanceof HttpServletRequest) && !(args[i] instanceof MultipartFile) && !(args[i] instanceof HttpSession) && !(args[i] instanceof HttpServletResponse)) {
                    param.put(paramNames[i], args[i]);
                }
            }
            LOG.warn("2.当前类参数列表：{}", JsonUtils.objectToJson(param));
        }
    }


    /**
     * controller返回后执行
     */
    protected void logAfter() {
        Long endTime = System.currentTimeMillis();
        Long takeTime = endTime - startTime;
        Long seconds = takeTime / 1000;
        if (seconds > 10) {
            LOG.warn("严重注意：该方法可能存在严重性能问题");
        } else if (seconds > 5) {
            LOG.warn("注意：该方法可能存在一般性能问题");
        }
        LOG.warn("[{}] ================== controller log end   {} ms===================", Thread.currentThread().getName(), takeTime);

    }


    /**
     * 反射得到方法参数的名称
     */
    private static String[] getFieldsName(Class cls, String clazzName, String methodName) throws NotFoundException {
        ClassPool pool = ClassPool.getDefault();
        //ClassClassPath classPath = new ClassClassPath(this.getClass());
        ClassClassPath classPath = new ClassClassPath(cls);
        pool.insertClassPath(classPath);

        CtClass cc = pool.get(clazzName);
        CtMethod cm = cc.getDeclaredMethod(methodName);
        MethodInfo methodInfo = cm.getMethodInfo();
        CodeAttribute codeAttribute = methodInfo.getCodeAttribute();
        LocalVariableAttribute attr = (LocalVariableAttribute) codeAttribute.getAttribute(LocalVariableAttribute.tag);
        if (attr == null) {
            // exception
        }
        String[] paramNames = new String[cm.getParameterTypes().length];

        int pos = Modifier.isStatic(cm.getModifiers()) ? 0 : 1;
        for (int i = 0; i < paramNames.length; i++) {
            //paramNames即参数名
            paramNames[i] = attr.variableName(i + pos);
        }
        return paramNames;
    }


}
