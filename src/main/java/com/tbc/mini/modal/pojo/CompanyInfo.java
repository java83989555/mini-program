package com.tbc.mini.modal.pojo;

import java.io.Serializable;
import java.util.Date;

public class CompanyInfo implements Serializable {
    private Integer id;

    /**
     * 企业名称
     *
     * @mbggenerated
     */
    private String name;

    /**
     * 简介
     *
     * @mbggenerated
     */
    private String intro;

    /**
     * 标签
     *
     * @mbggenerated
     */
    private String tags;

    /**
     * 资金规模
     *
     * @mbggenerated
     */
    private String money;

    /**
     * 投资规模
     *
     * @mbggenerated
     */
    private String singleMoney;

    /**
     * 投资领域
     *
     * @mbggenerated
     */
    private String areas;

    /**
     * 投资轮次
     *
     * @mbggenerated
     */
    private String rounds;

    private String email;

    private String phone;

    private String wechat;

    /**
     * 成立时间
     *
     * @mbggenerated
     */
    private Date foundedTime;

    /**
     * logo图
     *
     * @mbggenerated
     */
    private String img;

    /**
     * 是否删除
     *
     * @mbggenerated
     */
    private Byte deleted;

    private Date createTime;

    private Date updateTime;

    private static final long serialVersionUID = 1L;

    public CompanyInfo(Integer id, String name, String intro, String tags, String money, String singleMoney, String areas, String rounds, String email, String phone, String wechat, Date foundedTime, String img, Byte deleted, Date createTime, Date updateTime) {
        this.id = id;
        this.name = name;
        this.intro = intro;
        this.tags = tags;
        this.money = money;
        this.singleMoney = singleMoney;
        this.areas = areas;
        this.rounds = rounds;
        this.email = email;
        this.phone = phone;
        this.wechat = wechat;
        this.foundedTime = foundedTime;
        this.img = img;
        this.deleted = deleted;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public CompanyInfo() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro == null ? null : intro.trim();
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags == null ? null : tags.trim();
    }

    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money == null ? null : money.trim();
    }

    public String getSingleMoney() {
        return singleMoney;
    }

    public void setSingleMoney(String singleMoney) {
        this.singleMoney = singleMoney == null ? null : singleMoney.trim();
    }

    public String getAreas() {
        return areas;
    }

    public void setAreas(String areas) {
        this.areas = areas == null ? null : areas.trim();
    }

    public String getRounds() {
        return rounds;
    }

    public void setRounds(String rounds) {
        this.rounds = rounds == null ? null : rounds.trim();
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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img == null ? null : img.trim();
    }

    public Byte getDeleted() {
        return deleted;
    }

    public void setDeleted(Byte deleted) {
        this.deleted = deleted;
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
        sb.append(", name=").append(name);
        sb.append(", intro=").append(intro);
        sb.append(", tags=").append(tags);
        sb.append(", money=").append(money);
        sb.append(", singleMoney=").append(singleMoney);
        sb.append(", areas=").append(areas);
        sb.append(", rounds=").append(rounds);
        sb.append(", email=").append(email);
        sb.append(", phone=").append(phone);
        sb.append(", wechat=").append(wechat);
        sb.append(", foundedTime=").append(foundedTime);
        sb.append(", img=").append(img);
        sb.append(", deleted=").append(deleted);
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
        CompanyInfo other = (CompanyInfo) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getIntro() == null ? other.getIntro() == null : this.getIntro().equals(other.getIntro()))
            && (this.getTags() == null ? other.getTags() == null : this.getTags().equals(other.getTags()))
            && (this.getMoney() == null ? other.getMoney() == null : this.getMoney().equals(other.getMoney()))
            && (this.getSingleMoney() == null ? other.getSingleMoney() == null : this.getSingleMoney().equals(other.getSingleMoney()))
            && (this.getAreas() == null ? other.getAreas() == null : this.getAreas().equals(other.getAreas()))
            && (this.getRounds() == null ? other.getRounds() == null : this.getRounds().equals(other.getRounds()))
            && (this.getEmail() == null ? other.getEmail() == null : this.getEmail().equals(other.getEmail()))
            && (this.getPhone() == null ? other.getPhone() == null : this.getPhone().equals(other.getPhone()))
            && (this.getWechat() == null ? other.getWechat() == null : this.getWechat().equals(other.getWechat()))
            && (this.getFoundedTime() == null ? other.getFoundedTime() == null : this.getFoundedTime().equals(other.getFoundedTime()))
            && (this.getImg() == null ? other.getImg() == null : this.getImg().equals(other.getImg()))
            && (this.getDeleted() == null ? other.getDeleted() == null : this.getDeleted().equals(other.getDeleted()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()))
            && (this.getUpdateTime() == null ? other.getUpdateTime() == null : this.getUpdateTime().equals(other.getUpdateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getIntro() == null) ? 0 : getIntro().hashCode());
        result = prime * result + ((getTags() == null) ? 0 : getTags().hashCode());
        result = prime * result + ((getMoney() == null) ? 0 : getMoney().hashCode());
        result = prime * result + ((getSingleMoney() == null) ? 0 : getSingleMoney().hashCode());
        result = prime * result + ((getAreas() == null) ? 0 : getAreas().hashCode());
        result = prime * result + ((getRounds() == null) ? 0 : getRounds().hashCode());
        result = prime * result + ((getEmail() == null) ? 0 : getEmail().hashCode());
        result = prime * result + ((getPhone() == null) ? 0 : getPhone().hashCode());
        result = prime * result + ((getWechat() == null) ? 0 : getWechat().hashCode());
        result = prime * result + ((getFoundedTime() == null) ? 0 : getFoundedTime().hashCode());
        result = prime * result + ((getImg() == null) ? 0 : getImg().hashCode());
        result = prime * result + ((getDeleted() == null) ? 0 : getDeleted().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        result = prime * result + ((getUpdateTime() == null) ? 0 : getUpdateTime().hashCode());
        return result;
    }
}