package com.tbc.mini.modal.vo;


import java.io.Serializable;
import java.util.List;

/**
 * Author: fyh
 */
public class MenuVo implements Serializable{
	private static final long serialVersionUID = 5993286892322436568L;
	/**
	 * 系统类型，默认为CLS，以后新加系统以此字段区分
	 */
	private String sysType;
	/**
	 * 菜单名，如 客户管理
	 */
	private String menuName;
	/**
	 * 菜单类型：URL,BUTTON
	 */
	private String menuType;
	/**
	 * 菜单链接地址
	 */
	private String url;
	/**
	 * 序号，排序用
	 */
	private Long orders;

	/**
	 * 父模块ID
	 */
	private Long parentId;

	/**
	 * 业务编码
	 */
	private String businessCode;

	/**
	 * 菜单类型
	 */
	private Long flag;

	/**
	 * 是否选中
	 */
	private boolean checked;
	private String logoTag;

	/**
	 * 子菜单list
	 */
	private List<MenuVo> sysMenuList;

	public String getLogoTag() {
		return logoTag;
	}

	public void setLogoTag(String logoTag) {
		this.logoTag = logoTag;
	}

	public List<MenuVo> getSysMenuList() {
		return sysMenuList;
	}

	public void setSysMenuList(List<MenuVo> sysMenuList) {
		this.sysMenuList = sysMenuList;
	}

	public MenuVo() {

	}

	public Long getFlag() {
		return flag;
	}

	public void setFlag(Long flag) {
		this.flag = flag;
	}

	public String getBusinessCode() {
		return businessCode;
	}

	public void setBusinessCode(String businessCode) {
		this.businessCode = businessCode;
	}

	public Long getParentId() {
		return parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}


	public String getSysType() {
		return this.sysType;
	}

	public void setSysType(String sysType) {
		this.sysType = sysType;
	}

	public String getMenuName() {
		return this.menuName;
	}

	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}

	public String getMenuType() {
		return this.menuType;
	}

	public void setMenuType(String menuType) {
		this.menuType = menuType;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Long getOrders() {
		return orders;
	}

	public void setOrders(Long orders) {
		this.orders = orders;
	}





}
