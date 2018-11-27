package com.tbc.mini.controller.admin;


import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.tbc.mini.modal.pojo.Team;
import com.tbc.mini.modal.pojo.TeamExample;
import com.tbc.mini.service.TeamService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
     * 投资人列表
     * @return
     */
    @PostMapping(value = "list")
    public ServerResponse list(Integer companyId,@RequestParam(value = "page",required = false,defaultValue = "1")int page,
                                 @RequestParam(value = "pageSize",required = false,defaultValue = "1")int pageSize) {
        try {
            TeamExample example = new TeamExample();
            example.createCriteria().andCompanyIdEqualTo(companyId);
            Page<Object> objectPage = PageHelper.startPage(page, pageSize, true);
            List<Team> teamList = teamService.selectByExample(example);
            Map<String,Object> map = new HashMap<>();
            map.put("data",teamList);
            map.put("count",objectPage.getTotal());
            return ServerResponse.createBySuccess(map);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }

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
            teamService.deleteByPrimaryKey(id);
            return ServerResponse.createBySuccess("删除成功");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }





}
