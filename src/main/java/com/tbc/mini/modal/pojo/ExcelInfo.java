package com.tbc.mini.modal.pojo;

import java.io.Serializable;
import java.util.Date;

public class ExcelInfo implements Serializable {
    private Integer id;

    /**
     * 企业名称
     *
     * @mbggenerated
     */
    private String cmyName;

    /**
     * 简介
     *
     * @mbggenerated
     */
    private String intro;

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

    /**
     * 成立时间
     *
     * @mbggenerated
     */
    private String foundedTime;

    /**
     * logo图
     *
     * @mbggenerated
     */
    private String logoImg;

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

    /**
     * 头像
     *
     * @mbggenerated
     */
    private String img;

    private Date createTime;

    private Date updateTime;

    private static final long serialVersionUID = 1L;

    public ExcelInfo(Integer id, String cmyName, String intro, String areas, String rounds, String foundedTime, String logoImg, String name, String position, String resume, String preference, String img, Date createTime, Date updateTime) {
        this.id = id;
        this.cmyName = cmyName;
        this.intro = intro;
        this.areas = areas;
        this.rounds = rounds;
        this.foundedTime = foundedTime;
        this.logoImg = logoImg;
        this.name = name;
        this.position = position;
        this.resume = resume;
        this.preference = preference;
        this.img = img;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public ExcelInfo() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCmyName() {
        return cmyName;
    }

    public void setCmyName(String cmyName) {
        this.cmyName = cmyName == null ? null : cmyName.trim();
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro == null ? null : intro.trim();
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

    public String getFoundedTime() {
        return foundedTime;
    }

    public void setFoundedTime(String foundedTime) {
        this.foundedTime = foundedTime == null ? null : foundedTime.trim();
    }

    public String getLogoImg() {
        return logoImg;
    }

    public void setLogoImg(String logoImg) {
        this.logoImg = logoImg == null ? null : logoImg.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position == null ? null : position.trim();
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume == null ? null : resume.trim();
    }

    public String getPreference() {
        return preference;
    }

    public void setPreference(String preference) {
        this.preference = preference == null ? null : preference.trim();
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img == null ? null : img.trim();
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
        sb.append(", cmyName=").append(cmyName);
        sb.append(", intro=").append(intro);
        sb.append(", areas=").append(areas);
        sb.append(", rounds=").append(rounds);
        sb.append(", foundedTime=").append(foundedTime);
        sb.append(", logoImg=").append(logoImg);
        sb.append(", name=").append(name);
        sb.append(", position=").append(position);
        sb.append(", resume=").append(resume);
        sb.append(", preference=").append(preference);
        sb.append(", img=").append(img);
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
        ExcelInfo other = (ExcelInfo) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getCmyName() == null ? other.getCmyName() == null : this.getCmyName().equals(other.getCmyName()))
            && (this.getIntro() == null ? other.getIntro() == null : this.getIntro().equals(other.getIntro()))
            && (this.getAreas() == null ? other.getAreas() == null : this.getAreas().equals(other.getAreas()))
            && (this.getRounds() == null ? other.getRounds() == null : this.getRounds().equals(other.getRounds()))
            && (this.getFoundedTime() == null ? other.getFoundedTime() == null : this.getFoundedTime().equals(other.getFoundedTime()))
            && (this.getLogoImg() == null ? other.getLogoImg() == null : this.getLogoImg().equals(other.getLogoImg()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getPosition() == null ? other.getPosition() == null : this.getPosition().equals(other.getPosition()))
            && (this.getResume() == null ? other.getResume() == null : this.getResume().equals(other.getResume()))
            && (this.getPreference() == null ? other.getPreference() == null : this.getPreference().equals(other.getPreference()))
            && (this.getImg() == null ? other.getImg() == null : this.getImg().equals(other.getImg()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()))
            && (this.getUpdateTime() == null ? other.getUpdateTime() == null : this.getUpdateTime().equals(other.getUpdateTime()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getCmyName() == null) ? 0 : getCmyName().hashCode());
        result = prime * result + ((getIntro() == null) ? 0 : getIntro().hashCode());
        result = prime * result + ((getAreas() == null) ? 0 : getAreas().hashCode());
        result = prime * result + ((getRounds() == null) ? 0 : getRounds().hashCode());
        result = prime * result + ((getFoundedTime() == null) ? 0 : getFoundedTime().hashCode());
        result = prime * result + ((getLogoImg() == null) ? 0 : getLogoImg().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getPosition() == null) ? 0 : getPosition().hashCode());
        result = prime * result + ((getResume() == null) ? 0 : getResume().hashCode());
        result = prime * result + ((getPreference() == null) ? 0 : getPreference().hashCode());
        result = prime * result + ((getImg() == null) ? 0 : getImg().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        result = prime * result + ((getUpdateTime() == null) ? 0 : getUpdateTime().hashCode());
        return result;
    }
}