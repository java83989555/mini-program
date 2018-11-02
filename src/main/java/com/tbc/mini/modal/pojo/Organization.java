package com.tbc.mini.modal.pojo;

import java.io.Serializable;
import java.util.Date;

public class Organization implements Serializable {
    private Integer id;

    /**
     * 上级机构id
     *
     * @mbggenerated
     */
    private Integer parentId;

    private String name;

    /**
     * 机构类型集团，分公司，部门，业务组 (HEAD_COMPANY,BRANCH_COMPANY,DEPARTMENT,BUSINESS_GROUP)
     *
     * @mbggenerated
     */
    private String type;

    /**
     * 主图
     *
     * @mbggenerated
     */
    private String mainImg;

    /**
     * 轮播图
     *
     * @mbggenerated
     */
    private String subImg;

    /**
     * 简介
     *
     * @mbggenerated
     */
    private String intro;

    /**
     * 地址
     *
     * @mbggenerated
     */
    private String addr;

    /**
     * 邮箱
     *
     * @mbggenerated
     */
    private String email;

    /**
     * 电话
     *
     * @mbggenerated
     */
    private String phone;

    /**
     * 微信
     *
     * @mbggenerated
     */
    private String wechat;

    /**
     * 成立时间
     *
     * @mbggenerated
     */
    private Date foundedTime;

    /**
     * 数据状态
     *
     * @mbggenerated
     */
    private Integer status;

    private Date createTime;

    private Date updateTime;

    private static final long serialVersionUID = 1L;

    public Organization(Integer id, Integer parentId, String name, String type, String mainImg, String subImg, String intro, String addr, String email, String phone, String wechat, Date foundedTime, Integer status, Date createTime, Date updateTime) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.type = type;
        this.mainImg = mainImg;
        this.subImg = subImg;
        this.intro = intro;
        this.addr = addr;
        this.email = email;
        this.phone = phone;
        this.wechat = wechat;
        this.foundedTime = foundedTime;
        this.status = status;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Organization() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public String getMainImg() {
        return mainImg;
    }

    public void setMainImg(String mainImg) {
        this.mainImg = mainImg == null ? null : mainImg.trim();
    }

    public String getSubImg() {
        return subImg;
    }

    public void setSubImg(String subImg) {
        this.subImg = subImg == null ? null : subImg.trim();
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro == null ? null : intro.trim();
    }

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr == null ? null : addr.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getWechat() {
        return wechat;
    }

    public void setWechat(String wechat) {
        this.wechat = wechat == null ? null : wechat.trim();
    }

    public Date getFoundedTime() {
        return foundedTime;
    }

    public void setFoundedTime(Date foundedTime) {
        this.foundedTime = foundedTime;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", parentId=").append(parentId);
        sb.append(", name=").append(name);
        sb.append(", type=").append(type);
        sb.append(", mainImg=").append(mainImg);
        sb.append(", subImg=").append(subImg);
        sb.append(", intro=").append(intro);
        sb.append(", addr=").append(addr);
        sb.append(", email=").append(email);
        sb.append(", phone=").append(phone);
        sb.append(", wechat=").append(wechat);
        sb.append(", foundedTime=").append(foundedTime);
        sb.append(", status=").append(status);
        sb.append(", createTime=").append(createTime);
        sb.append(", updateTime=").append(updateTime);
        sb.append("]");
        return sb.toString();
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        Organization other = (Organization) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getParentId() == null ? other.getParentId() == null : this.getParentId().equals(other.getParentId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getType() == null ? other.getType() == null : this.getType().equals(other.getType()))
            && (this.getMainImg() == null ? other.getMainImg() == null : this.getMainImg().equals(other.getMainImg()))
            && (this.getSubImg() == null ? other.getSubImg() == null : this.getSubImg().equals(other.getSubImg()))
            && (this.getIntro() == null ? other.getIntro() == null : this.getIntro().equals(other.getIntro()))
            && (this.getAddr() == null ? other.getAddr() == null : this.getAddr().equals(other.getAddr()))
            && (this.getEmail() == null ? other.getEmail() == null : this.getEmail().equals(other.getEmail()))
            && (this.getPhone() == null ? other.getPhone() == null : this.getPhone().equals(other.getPhone()))
            && (this.getWechat() == null ? other.getWechat() == null : this.getWechat().equals(other.getWechat()))
            && (this.getFoundedTime() == null ? other.getFoundedTime() == null : this.getFoundedTime().equals(other.getFoundedTime()))
            && (this.getStatus() == null ? other.getStatus() == null : this.getStatus().equals(other.getStatus()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()))
            && (this.getUpdateTime() == null ? other.getUpdateTime() == null : this.getUpdateTime().equals(other.getUpdateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getParentId() == null) ? 0 : getParentId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getType() == null) ? 0 : getType().hashCode());
        result = prime * result + ((getMainImg() == null) ? 0 : getMainImg().hashCode());
        result = prime * result + ((getSubImg() == null) ? 0 : getSubImg().hashCode());
        result = prime * result + ((getIntro() == null) ? 0 : getIntro().hashCode());
        result = prime * result + ((getAddr() == null) ? 0 : getAddr().hashCode());
        result = prime * result + ((getEmail() == null) ? 0 : getEmail().hashCode());
        result = prime * result + ((getPhone() == null) ? 0 : getPhone().hashCode());
        result = prime * result + ((getWechat() == null) ? 0 : getWechat().hashCode());
        result = prime * result + ((getFoundedTime() == null) ? 0 : getFoundedTime().hashCode());
        result = prime * result + ((getStatus() == null) ? 0 : getStatus().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        result = prime * result + ((getUpdateTime() == null) ? 0 : getUpdateTime().hashCode());
        return result;
    }
}