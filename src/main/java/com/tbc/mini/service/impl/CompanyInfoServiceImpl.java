package com.tbc.mini.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.tbc.mini.common.exception.ParamsException;
import com.tbc.mini.mapper.TeamMapper;
import com.tbc.mini.mapper.custom.CompanyInfoCustomMapper;
import com.tbc.mini.modal.pojo.*;
import com.tbc.mini.modal.vo.CompanyInfoAdminVo;
import com.tbc.mini.modal.vo.CompanyInfoVO;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.service.annotation.BaseService;
import com.tbc.mini.support.service.base.BaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import com.tbc.mini.mapper.CompanyInfoMapper;
import com.tbc.mini.service.CompanyInfoService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.HashMap;
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
    private CompanyInfoCustomMapper companyInfoCustomMapper;
    @Autowired
    private TeamMapper teamMapper;

    @Override
    public ServerResponse<CompanyInfoAdminVo> detail(Integer id) {
        CompanyInfoAdminVo vo = new CompanyInfoAdminVo();
        CompanyInfo info = companyInfoMapper.selectByPrimaryKey(id);
        BeanUtils.copyProperties(info, vo);
        TeamExample example = new TeamExample();
        example.createCriteria().andCompanyIdEqualTo(id);
        List<Team> teamList = teamMapper.selectByExample(example);
        vo.setTeamList(teamList);
        return ServerResponse.createBySuccess(vo);
    }


    @Override
    public ServerResponse<CompanyInfo> addCompany(CompanyInfo info) {

        verifyCompany(info);
        int count = companyInfoMapper.insert(info);
        if (count > 0) {
            return ServerResponse.createBySuccess(info);
        }
        return ServerResponse.createByErrorMessage("机构新建失败");
    }


    @Override
    public ServerResponse<String> updateCompany(CompanyInfo info) {
        if (null == info || null == info.getId()) {
            return ServerResponse.createByErrorMessage("参数错误");
        }
        verifyCompany(info);
        int count = companyInfoMapper.updateByPrimaryKeySelective(info);
        if (count > 0) {
            return ServerResponse.createBySuccess("机构修改成功");
        }
        return ServerResponse.createByErrorMessage("机构修改失败");
    }

    @Override
    public ServerResponse<String> deleteCompany(Integer id) {
        int count = companyInfoMapper.deleteByPrimaryKey(id);
        if(count>0){
            TeamExample example = new TeamExample();
            example.createCriteria().andCompanyIdEqualTo(id);
            teamMapper.deleteByExample(example);
        }
        return ServerResponse.createBySuccess("机构删除成功");
    }

    @Override
    public ServerResponse selectByKeyword(String keyword,String imgUrlPrefix, int page, int size) {
        Page<Object> objects = PageHelper.startPage(page, size, true);
        List<CompanyInfo> companyInfoList = companyInfoCustomMapper.selectByKeyword(keyword);
        List<CompanyInfoVO> companyInfoVOList = new ArrayList<>();
        companyInfoList.forEach(companyInfo -> {
            //imgUrl拼装
            companyInfo.setImg(imgUrlPrefix + companyInfo.getImg());
            companyInfoVOList.add(CompanyInfoVO.assemble(companyInfo));
        });
        HashMap<String, Object> result = new HashMap<>(16);
        result.put("total", objects.getTotal());
        result.put("rows", companyInfoVOList);
        return ServerResponse.createBySuccess(result);
    }

    /**
     * 校验机构名称
     *
     * @param name
     * @return
     */
    private CompanyInfo checkname(String name) {
        CompanyInfo info = null;
        CompanyInfoExample example = new CompanyInfoExample();
        example.createCriteria().andNameEqualTo(name);
        List<CompanyInfo> userList = companyInfoMapper.selectByExample(example);
        if (null != userList && !userList.isEmpty()) {
            info = userList.get(0);
        }
        return info;
    }


    private void verifyCompany(CompanyInfo info) {
        if (info == null) {
            throw new ParamsException("机构信息未填写");
        }
        if (info.getName() == null) {
            throw new ParamsException("机构名称为空");
        }
        CompanyInfo dbInfo = checkname(info.getName());
        if (null != dbInfo) {
            throw new ParamsException("机构名称已存在");
        }
    }
}