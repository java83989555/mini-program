package com.tbc.mini.mapper;

import com.tbc.mini.modal.pojo.ZaUser;
import com.tbc.mini.modal.pojo.ZaUserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ZaUserMapper {
    int countByExample(ZaUserExample example);

    int deleteByExample(ZaUserExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(ZaUser record);

    int insertSelective(ZaUser record);

    List<ZaUser> selectByExample(ZaUserExample example);

    ZaUser selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") ZaUser record, @Param("example") ZaUserExample example);

    int updateByExample(@Param("record") ZaUser record, @Param("example") ZaUserExample example);

    int updateByPrimaryKeySelective(ZaUser record);

    int updateByPrimaryKey(ZaUser record);
}