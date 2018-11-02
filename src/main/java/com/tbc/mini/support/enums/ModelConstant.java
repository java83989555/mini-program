package com.tbc.mini.support.enums;


public class ModelConstant {

	public static enum ZaUserStatus {
		NORMAL(1,"正常"),
		DEAD(2,"停用");
		private Integer status;
		private String desc;

		ZaUserStatus(Integer status, String desc) {
			this.status = status;
			this.desc = desc;
		}

		public Integer getStatus() {
			return status;
		}

		public void setStatus(Integer status) {
			this.status = status;
		}

		public String getDesc() {
			return desc;
		}

		public void setDesc(String desc) {
			this.desc = desc;
		}

	}

	public static enum ZaUserLevel {
		MANAGER(2,"管理员"),
		NORMAL(1,"普通用户");

		private Integer level;
		private String desc;

		ZaUserLevel(Integer level, String desc) {
			this.level = level;
			this.desc = desc;
		}

		public Integer getLevel() {
			return level;
		}

		public void setLevel(Integer level) {
			this.level = level;
		}

		public String getDesc() {
			return desc;
		}

		public void setDesc(String desc) {
			this.desc = desc;
		}
	}


}
