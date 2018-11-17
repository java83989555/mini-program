package com.tbc.mini.service.impl;

import com.tbc.mini.common.exception.ParamsException;
import com.tbc.mini.mapper.TeamMapper;
import com.tbc.mini.modal.pojo.*;
import com.tbc.mini.modal.vo.CompanyInfoVo;
import com.tbc.mini.service.TeamService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.enums.ModelConstant;
import com.tbc.mini.support.service.annotation.BaseService;
import com.tbc.mini.support.service.base.BaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import com.tbc.mini.mapper.CompanyInfoMapper;
import com.tbc.mini.service.CompanyInfoService;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
* @author 高巍
* on 2018/11/01 14:28:37
* CompanyInfoService接口实现类
*/

@org.springframework.stereotype.Service
@BaseService
@Slf4j
public class CompanyInfoServiceImpl extends BaseServiceImpl<CompanyInfoMapper, CompanyInfo, CompanyInfoExample> implements CompanyInfoService {

    @Autowired
    private CompanyInfoMapper companyInfoMapper;

    @Autowired
    private TeamMapper teamMapper;

    @Override
    public ServerResponse<CompanyInfoVo> detail(Integer id) {
        CompanyInfoVo vo = new CompanyInfoVo();
        CompanyInfo info = companyInfoMapper.selectByPrimaryKey(id);
        BeanUtils.copyProperties(info,vo);
        TeamExample example = new TeamExample();
        example.createCriteria().andCompanyIdEqualTo(id).andDeletedEqualTo(NumberUtils.INTEGER_ZERO);
        List<Team> teamList = teamMapper.selectByExample(example);
        vo.setTeamList(teamList);
        return ServerResponse.createBySuccess(vo);
    }


    @Override
    public ServerResponse<CompanyInfo> addCompany(CompanyInfo info) {

        verifyCompany(info);
        info.setDeleted(NumberUtils.INTEGER_ZERO);
        int count = companyInfoMapper.insert(info);
        if(count > 0){
            return ServerResponse.createBySuccess(info);
        }
        return ServerResponse.createByErrorMessage("机构新建失败");
    }


    @Override
    public ServerResponse<String> updateCompany(CompanyInfo info) {
        if(null == info || null == info.getId()){
            return ServerResponse.createByErrorMessage("参数错误");
        }
        verifyCompany(info);
        int count = companyInfoMapper.updateByPrimaryKeySelective(info);
        if(count > 0){
            return ServerResponse.createBySuccess("机构修改成功");
        }
        return ServerResponse.createByErrorMessage("机构修改失败");
    }

    @Override
    public ServerResponse<String> deleteCompany(Integer id) {
        CompanyInfo info = new CompanyInfo();
        info.setDeleted(NumberUtils.INTEGER_ONE);
        info.setId(id);
        int count = companyInfoMapper.updateByPrimaryKeySelective(info);
        if(count>0){
            TeamExample example = new TeamExample();
            example.createCriteria().andCompanyIdEqualTo(id);
            Team team = new Team();
            team.setDeleted(NumberUtils.INTEGER_ZERO);
            teamMapper.updateByExampleSelective(team,example);
        }
        return ServerResponse.createBySuccess("机构删除成功");
    }

    /**
     * 校验机构名称
     * @param name
     * @return
     */
    private CompanyInfo checkname(String name){
        CompanyInfo info = null;
        CompanyInfoExample example = new CompanyInfoExample();
        example.createCriteria().andNameEqualTo(name).andDeletedEqualTo(NumberUtils.INTEGER_ZERO);
        List<CompanyInfo> userList = companyInfoMapper.selectByExample(example);
        if(null != userList && !userList.isEmpty()){
             info = userList.get(0);
        }
        return info;
    }


    private void verifyCompany(CompanyInfo info){
        if (info == null) {
            throw new ParamsException("机构信息未填写");
        }
        if(info.getName()==null){
            throw new ParamsException("机构名称为空");
        }
        CompanyInfo dbInfo = checkname(info.getName());
        if(null != dbInfo){
            throw new ParamsException("机构名称已存在");
        }
    }
}