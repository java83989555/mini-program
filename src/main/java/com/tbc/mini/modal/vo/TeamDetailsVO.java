package com.tbc.mini.modal.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author 高巍
 * @createTime 2018年11月24日 16:49
 * @description 团队视图对象
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeamDetailsVO {
    private Integer id;

    /**
     * 所属机构id
     *
     * @mbggenerated
     */
    private Integer companyId;

    /**
     * 所属机构名称
     *
     * @mbggenerated
     */
    private String companyName;

    /**
     * 姓名
     *
     * @mbggenerated
     */
    private String name;

    /**
     * 职位
     *
     * @mbggenerated
     */
    private String position;

    /**
     * 履历
     *
     * @mbggenerated
     */
    private String resume;

    /**
     * 投资偏好
     *
     * @mbggenerated
     */
    private String preference;

    private String email;

    private String phone;

    private String wechat;

    /**
     * 成立时间
     *
     * @mbggenerated
     */
    private String foundedTime;

    /**
     * 头像
     *
     * @mbggenerated
     */
    private String img;

}
