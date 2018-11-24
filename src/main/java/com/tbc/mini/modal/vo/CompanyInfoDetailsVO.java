package com.tbc.mini.modal.vo;

import com.tbc.mini.modal.pojo.CompanyInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author 高巍
 * @createTime 2018年11月17日 16:41
 * @description 小程序公司列表视图对象
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CompanyInfoDetailsVO {
    private Integer companyInfoId;
    /**
     * 公司名称
     */
    private String name;
    /**
     * 公司Logo url
     */
    private String logoUrl;
    private String intro;
    /**
     * 投资领域列表
     */
    private List<String> areaList;
    /**
     * 轮次列表
     */
    private List<String> roundsList;
    /**
     * 公司创建时间
     */
    private String foundedTime;

    private List<TeamVO> teamVOList;

    public static final String FRONT_BRACKET = "(";
    public static final String BACK_BRACKET = "\\)";
    public static final String EXCLUDE_ITEM = "不限";

    public static CompanyInfoDetailsVO assemble(CompanyInfo companyInfo,List<TeamVO> teamVOList) {
        String name = companyInfo.getName();
        String logoUrl = companyInfo.getImg();

        List<String> areaList = CompanyInfoVO.parseAreas(companyInfo.getAreas());
        List<String> roundsList=CompanyInfoVO.parseRounds(companyInfo.getRounds());
        return CompanyInfoDetailsVO.builder().
                companyInfoId(companyInfo.getId()).
                name(name).
                logoUrl(logoUrl).
                intro(companyInfo.getIntro()).
                areaList(areaList).
                roundsList(roundsList).
                foundedTime(companyInfo.getFoundedTime()).
                teamVOList(teamVOList).
                build();
    }

}
