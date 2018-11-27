package com.tbc.mini.controller.admin;

import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.modal.vo.MenuVo;
import com.tbc.mini.service.ZaUserService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.BaseResponseCode;
import com.tbc.mini.support.enums.ModelConstant;
import com.tbc.mini.support.web.base.BaseController;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

import java.util.ArrayList;
import java.util.List;

import static com.tbc.mini.support.enums.ModelConstant.SESSION_KEY_USER;

/**
 * @author 高巍
 * @createTime 2018年11月01日 11:27
 * @description 后台登录控制器
 */
@RestController
@RequestMapping("/admin/user/")
public class AdminLoginController extends BaseController {

    @Autowired
    private ZaUserService zaUserService;


    @PostMapping(value = "login")
    public ServerResponse login(HttpServletRequest request, String username, String password) {

        if (request.getSession().getAttribute(SESSION_KEY_USER) != null) {
            return ServerResponse.createByErrorMessage("用户已登录，若要切换用户，请先退出系统。");
        }
        if (StringUtils.isBlank(username)) {
            return ServerResponse.createByErrorCodeMessage(BaseResponseCode.NULL_USER.getCode(),BaseResponseCode.NULL_USER.getDesc());
        }
        if (StringUtils.isBlank(password)) {
            return ServerResponse.createByErrorCodeMessage(BaseResponseCode.NULL_PWD.getCode(),BaseResponseCode.NULL_PWD.getDesc());
        }
        ServerResponse<ZaUser> response = zaUserService.login(username,password);
        if(response.isSuccess()){
            ZaUser user = response.getData();
            //管理员校验
            if(user.getLevel().equals(ModelConstant.ZaUserLevel.MANAGER.getLevel())){
                request.getSession().setAttribute(ModelConstant.SESSION_KEY_USER,user);
                return response;
            }else{
                return ServerResponse.createByErrorCodeMessage(BaseResponseCode.NEED_MANAGER_LOGIN.getCode(),BaseResponseCode.NEED_MANAGER_LOGIN.getDesc());
            }
        }
        return response;
    }


    /**
     * 登出
     *
     * @param request
     * @return
     */
    @GetMapping(value = "logout")
    public ServerResponse logout(HttpServletRequest request) {
        request.getSession().removeAttribute(ModelConstant.SESSION_KEY_USER);
        return ServerResponse.createBySuccess();

    }

    @GetMapping(value = "menu")
    public ServerResponse menu() {
        List<MenuVo> menuVoList = new ArrayList<>();
        MenuVo vo = new MenuVo();
        vo.setChecked(false);
        vo.setMenuName("用户管理");
        vo.setMenuType("URL");
        vo.setLogoTag("icon-kehuguanli");
        vo.setOrders(1L);
        vo.setUrl("/");
        List<MenuVo> detailList1 = new ArrayList<>();
        MenuVo detail1 = new MenuVo();
        detail1.setChecked(false);
        detail1.setMenuName("用户管理");
        detail1.setMenuType("URL");
        detail1.setOrders(1L);
        detail1.setUrl("user/index.html");
        detailList1.add(detail1);
        List<MenuVo> detailList2 = new ArrayList<>();
        vo.setSysMenuList(detailList1);

        MenuVo vo1 = new MenuVo();
        vo1.setChecked(false);
        vo1.setMenuName("机构管理");
        vo1.setMenuType("URL");
        vo1.setLogoTag("icon-zhichi");
        vo1.setOrders(2L);
        vo1.setUrl("/");
        MenuVo detail2 = new MenuVo();
        detail2.setChecked(false);
        detail2.setMenuName("机构管理");
        detail2.setMenuType("URL");
        detail2.setOrders(1L);
        detail2.setUrl("company/index.html");
        detailList2.add(detail2);
        vo1.setSysMenuList(detailList2);

        menuVoList.add(vo);
        menuVoList.add(vo1);
        return ServerResponse.createBySuccess(menuVoList);
    }


    @GetMapping(value = "sessionGet")
    public ServerResponse sessionUser() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes())
                .getRequest();
        return ServerResponse.createBySuccess(request.getSession().getAttribute(ModelConstant.SESSION_KEY_USER));
    }
}
