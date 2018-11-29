package com.tbc.mini.mapper.custom;

import com.tbc.mini.modal.pojo.CompanyInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface CompanyInfoCustomMapper {
    List<CompanyInfo> selectByKeyword(@Param("keyword") String keyword);
}