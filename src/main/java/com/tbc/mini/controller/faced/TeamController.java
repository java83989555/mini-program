package com.tbc.mini.controller.faced;

import com.tbc.mini.modal.pojo.Team;
import com.tbc.mini.modal.vo.TeamDetailsVO;
import com.tbc.mini.service.TeamService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.BaseResponseCode;
import com.tbc.mini.support.web.base.BaseController;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author 高巍
 * @createTime 2018年11月24日 17:08
 * @description 团队控制器
 */
@RestController
@RequestMapping("/faced/team/")
public class TeamController extends BaseController {

    @Autowired
    TeamService teamService;

    @Value("${imgUrl.prefix}")
    private String imgUrlPrefix;

    @GetMapping(value = "details/{teamId}")
    public ServerResponse details(@PathVariable(name = "teamId") Integer teamId) {
        try {
            if (teamId == null) {
                return ServerResponse.createByErrorCodeMessage(BaseResponseCode.ILLEGAL_ARGUMENT);
            }
            Team team = teamService.selectByPrimaryKey(teamId);
            TeamDetailsVO teamVO = new TeamDetailsVO();
            BeanUtils.copyProperties(team, teamVO);
            //url拼装
            teamVO.setImg(imgUrlPrefix+team.getImg());
            return ServerResponse.createBySuccess(teamVO);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }
}
