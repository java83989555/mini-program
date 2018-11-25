package com.tbc.mini.controller.admin;


import com.tbc.mini.modal.pojo.Team;
import com.tbc.mini.service.TeamService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.base.BaseController;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


/**
 * @author 高巍
 * @createTime 2018年11月01日 11:22
 * @description 后台机构控制器
 */
@RestController
@RequestMapping("/admin/team/")
public class AdminTeamController extends BaseController {


    @Autowired
    private TeamService teamService;



    /**
     * 新增
     * @param team
     * @return
     */
    @PostMapping(value = "add")
    public ServerResponse add(Team team) {
        if(null == team.getCompanyId()){
            return ServerResponse.createByErrorMessage("参数错误");
        }
        try {
            team.setDeleted(NumberUtils.INTEGER_ZERO);
            teamService.insert(team);
            return ServerResponse.createBySuccess("新增成功");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

    /**
     * 修改
     * @param team
     * @return
     */
    @PostMapping(value = "update")
    public ServerResponse update(Team team) {
        if(null == team.getId()){
            return ServerResponse.createByErrorMessage("参数错误");
        }
        try {
            teamService.updateByPrimaryKeySelective(team);
            return ServerResponse.createBySuccess("修改成功");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    /**
     * 删除
     * @param id
     * @return
     */
    @PostMapping(value = "delete")
    public ServerResponse delete(Integer id) {
        try {
            Team team = new Team();
            team.setId(id);
            team.setDeleted(NumberUtils.INTEGER_ZERO);
            teamService.updateByPrimaryKeySelective(team);
            return ServerResponse.createBySuccess("删除成功");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }





}
