package com.tbc.mini.support.web.aspect;

import com.tbc.mini.common.utils.JsonUtils;
import com.tbc.mini.support.web.aspect.BaseLogAspect;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

/**
 * AOP的资料：
 * http://www.cnblogs.com/-bumblebee-/archive/2012/03/29/2423408.html
 * http://hotstrong.iteye.com/blog/1330046
 * http://blog.csdn.net/confirmaname/article/details/9728327
 * http://blog.csdn.net/z2007130205/article/details/25713843
 *
 * @author gv
 */

@Aspect
@Component
public class ControllerLogAspect extends BaseLogAspect {

    /**
     * 环绕通配符方式
     *
     * @param pjp
     * @return
     * @throws Throwable
     */
    @Override
    @Around("execution(* com.tbc.mini.controller.admin.*Controller.*(..))" +
            "||execution(* com.tbc.mini.controller.faced.*Controller.*(..))")
    public Object aroundControllerMethod(final ProceedingJoinPoint pjp) throws Throwable {
        super.logBefore(pjp);
        Object returnVal = pjp.proceed();
        LOG.warn("3.返回值：\n" + JsonUtils.obj2StringPretty(returnVal));
        super.logAfter();
        return returnVal;
    }

}
