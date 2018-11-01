/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库
 Source Server Type    : MySQL
 Source Server Version : 50719
 Source Host           : localhost:3306
 Source Schema         : tbc

 Target Server Type    : MySQL
 Target Server Version : 50719
 File Encoding         : 65001

 Date: 01/11/2018 14:49:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for company_info
-- ----------------------------
DROP TABLE IF EXISTS `company_info`;
CREATE TABLE `company_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT '企业名称',
  `intro` varchar(1000) DEFAULT NULL COMMENT '简介',
  `tags` varchar(255) DEFAULT NULL COMMENT '标签',
  `money` varchar(255) DEFAULT NULL COMMENT '资金规模',
  `single_money` varchar(255) DEFAULT NULL COMMENT '投资规模',
  `areas` varchar(500) DEFAULT NULL COMMENT '投资领域',
  `rounds` varchar(100) DEFAULT NULL COMMENT '投资轮次',
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `wechat` varchar(30) DEFAULT NULL,
  `founded_time` datetime DEFAULT NULL COMMENT '成立时间',
  `img` varchar(100) DEFAULT NULL COMMENT 'logo图',
  `deleted` tinyint(2) DEFAULT NULL COMMENT '是否删除',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投资机构表';

-- ----------------------------
-- Table structure for organization
-- ----------------------------
DROP TABLE IF EXISTS `organization`;
CREATE TABLE `organization` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT '0' COMMENT '上级机构id',
  `name` varchar(100) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL COMMENT '机构类型集团，分公司，部门，业务组 (HEAD_COMPANY,BRANCH_COMPANY,DEPARTMENT,BUSINESS_GROUP)',
  `main_img` varchar(255) DEFAULT NULL COMMENT '主图',
  `sub_img` varchar(300) DEFAULT NULL COMMENT '轮播图',
  `intro` varchar(1000) DEFAULT NULL COMMENT '简介',
  `addr` varchar(300) DEFAULT NULL COMMENT '地址',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(20) DEFAULT NULL COMMENT '电话',
  `wechat` varchar(30) DEFAULT NULL COMMENT '微信',
  `founded_time` datetime DEFAULT NULL COMMENT '成立时间',
  `status` tinyint(4) DEFAULT NULL COMMENT '数据状态',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='内部机构表';

-- ----------------------------
-- Table structure for team
-- ----------------------------
DROP TABLE IF EXISTS `team`;
CREATE TABLE `team` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_id` int(11) DEFAULT NULL COMMENT '所属机构id',
  `company_name` varchar(100) DEFAULT NULL COMMENT '所属机构名称',
  `name` varchar(100) DEFAULT NULL COMMENT '姓名',
  `position` varchar(100) DEFAULT NULL COMMENT '职位',
  `resume` varchar(1000) DEFAULT NULL COMMENT '履历',
  `email` varchar(50) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `wechat` varchar(30) DEFAULT NULL,
  `founded_time` datetime DEFAULT NULL COMMENT '成立时间',
  `img` varchar(100) DEFAULT NULL COMMENT '头像',
  `deleted` tinyint(2) DEFAULT NULL COMMENT '是否删除',
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`) USING BTREE,
  KEY `company_id` (`company_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='投资团队';

-- ----------------------------
-- Table structure for za_user
-- ----------------------------
DROP TABLE IF EXISTS `za_user`;
CREATE TABLE `za_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主ID',
  `username` varchar(40) DEFAULT NULL COMMENT '用户名，统一为手机号',
  `password` varchar(32) DEFAULT NULL COMMENT '密码',
  `salt` varchar(255) DEFAULT NULL COMMENT '密码加密盐值',
  `realname` varchar(50) DEFAULT NULL COMMENT '姓名',
  `img` varchar(50) DEFAULT NULL COMMENT '头像（预留）',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `position` varchar(50) DEFAULT NULL COMMENT '职位',
  `level` int(4) DEFAULT NULL COMMENT '用户级别(暂定2管理员，1、普通用户)',
  `org_id` int(11) DEFAULT NULL COMMENT '公司ID',
  `org_name` varchar(255) DEFAULT NULL COMMENT '所属分公司名称',
  `status` tinyint(2) DEFAULT NULL COMMENT '当前状态：1:NORMAL，2:LOCKED，3:DEAD',
  `register_time` datetime DEFAULT NULL COMMENT '注册时间',
  `update_time` datetime DEFAULT NULL COMMENT '最近修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`) USING BTREE,
  UNIQUE KEY `username_password` (`password`,`username`) USING BTREE,
  KEY `idx_username` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='内部用户表';

-- ----------------------------
-- Records of za_user
-- ----------------------------
BEGIN;
INSERT INTO `za_user` VALUES (1, '18058525327', '123456', '123456', 'gv', '', '83989555@qq.com', '123', 1, 1, '111', 1, '2018-11-27 14:43:50', '2018-11-13 14:43:56');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
