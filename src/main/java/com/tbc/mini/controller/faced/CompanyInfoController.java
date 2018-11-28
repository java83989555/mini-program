package com.tbc.mini.controller.faced;

import com.tbc.mini.modal.pojo.CompanyInfo;
import com.tbc.mini.modal.pojo.CompanyInfoExample;
import com.tbc.mini.modal.pojo.Team;
import com.tbc.mini.modal.pojo.TeamExample;
import com.tbc.mini.modal.vo.CompanyInfoDetailsVO;
import com.tbc.mini.modal.vo.CompanyInfoVO;
import com.tbc.mini.modal.vo.TeamVO;
import com.tbc.mini.service.CompanyInfoService;
import com.tbc.mini.service.TeamService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.BaseResponseCode;
import com.tbc.mini.support.web.base.BaseController;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author 高巍
 * @createTime 2018年11月17日 16:24
 * @description 公司信息控制器
 */
@RestController
@RequestMapping("/faced/company/")
public class CompanyInfoController extends BaseController {

    @Autowired
    CompanyInfoService companyInfoService;
    @Autowired
    TeamService teamService;

    @GetMapping(value = "list")
    public ServerResponse list(@RequestParam(value = "page", defaultValue = "1") int page,
                               @RequestParam(value = "size", defaultValue = "20") int size,
                               @RequestParam(value = "keyword", required = false) String keyword) {
        try {
            CompanyInfoExample companyInfoExample = new CompanyInfoExample();
            if (StringUtils.isNotBlank(keyword)) {
                companyInfoExample.createCriteria().andNameLike("%" + keyword + "%");
                CompanyInfoExample.Criteria criteria2 = companyInfoExample.createCriteria().andAreasLike("%" + keyword + "%");
                CompanyInfoExample.Criteria criteria3 = companyInfoExample.createCriteria().andRoundsLike("%" + keyword + "%");
                companyInfoExample.or(criteria2);
                companyInfoExample.or(criteria3);
            }
            companyInfoExample.setOrderByClause("id desc");
            List<CompanyInfo> companyInfoList = companyInfoService.selectByExampleForStartPage(companyInfoExample, page, size);
            List<CompanyInfoVO> companyInfoVOList = new ArrayList<>();
            companyInfoList.forEach(companyInfo -> companyInfoVOList.add(CompanyInfoVO.assemble(companyInfo)));
            int count = companyInfoService.countByExample(companyInfoExample);
            HashMap<String, Object> result = new HashMap<>(16);
            result.put("total", count);
            result.put("rows", companyInfoVOList);
            return ServerResponse.createBySuccess(result);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    @GetMapping(value = "details/{companyInfoId}")
    public ServerResponse details(@PathVariable(name = "companyInfoId") Integer companyInfoId) {
        try {
            if (companyInfoId == null) {
                return ServerResponse.createByErrorCodeMessage(BaseResponseCode.ILLEGAL_ARGUMENT);
            }
            CompanyInfo companyInfo = companyInfoService.selectByPrimaryKey(companyInfoId);
            TeamExample example = new TeamExample();
            example.createCriteria().andCompanyIdEqualTo(companyInfoId);
            List<TeamVO> teamVOList = new ArrayList<>();
            List<Team> teams = teamService.selectByExample(example);
            teams.forEach(team -> {
                TeamVO teamVO = new TeamVO();
                BeanUtils.copyProperties(team, teamVO);
                teamVOList.add(teamVO);
            });
            return ServerResponse.createBySuccess(CompanyInfoDetailsVO.assemble(companyInfo, teamVOList));
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }
}
