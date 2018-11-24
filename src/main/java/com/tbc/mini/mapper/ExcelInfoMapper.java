package com.tbc.mini.mapper;

import com.tbc.mini.modal.pojo.ExcelInfo;
import com.tbc.mini.modal.pojo.ExcelInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ExcelInfoMapper {
    int countByExample(ExcelInfoExample example);

    int deleteByExample(ExcelInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(ExcelInfo record);

    int insertSelective(ExcelInfo record);

    List<ExcelInfo> selectByExample(ExcelInfoExample example);

    ExcelInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") ExcelInfo record, @Param("example") ExcelInfoExample example);

    int updateByExample(@Param("record") ExcelInfo record, @Param("example") ExcelInfoExample example);

    int updateByPrimaryKeySelective(ExcelInfo record);

    int updateByPrimaryKey(ExcelInfo record);
}