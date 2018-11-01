package com.tbc.mini.service.impl;

import com.tbc.mini.support.service.annotation.BaseService;
import com.tbc.mini.support.service.base.BaseServiceImpl;
import lombok.extern.slf4j.Slf4j;
import com.tbc.mini.mapper.TeamMapper;
import com.tbc.mini.modal.pojo.Team;
import com.tbc.mini.modal.pojo.TeamExample;
import com.tbc.mini.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

/**
* @author 高巍
* on 2018/11/01 14:28:38
* TeamService接口实现类
*/

@org.springframework.stereotype.Service
@BaseService
@Slf4j
public class TeamServiceImpl extends BaseServiceImpl<TeamMapper, Team, TeamExample> implements TeamService {

    @Autowired
    private TeamMapper teamMapper;


}