package com.tbc.mini.modal.vo;

import com.tbc.mini.modal.pojo.CompanyInfo;
import com.tbc.mini.modal.pojo.Team;

import java.util.List;

public class CompanyInfoAdminVo extends CompanyInfo {

    private List<Team> teamList;

    public List<Team> getTeamList() {
        return teamList;
    }

    public void setTeamList(List<Team> teamList) {
        this.teamList = teamList;
    }
}
