package com.tbc.mini.controller.faced;

import com.tbc.mini.modal.pojo.CompanyInfo;
import com.tbc.mini.modal.pojo.CompanyInfoExample;
import com.tbc.mini.modal.vo.CompanyInfoVO;
import com.tbc.mini.service.CompanyInfoService;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.base.BaseController;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author 高巍
 * @createTime 2018年11月17日 16:24
 * @description 公司信息控制器
 */
@RestController
@RequestMapping("/faced/company/")
public class CompanyInfoController extends BaseController {

    @Autowired
    CompanyInfoService companyInfoService;

    @GetMapping(value = "list")
    public ServerResponse list(@RequestParam(value = "page", defaultValue = "1") int page,
                               @RequestParam(value = "size", defaultValue = "20") int size,
                               @RequestParam(value = "keyword", required = false) String keyword) {
        try {
            CompanyInfoExample companyInfoExample = new CompanyInfoExample();
            if (StringUtils.isNotBlank(keyword)) {
                companyInfoExample.createCriteria().andNameLike("%" + keyword + "%");
                CompanyInfoExample.Criteria criteria2 = companyInfoExample.createCriteria().andAreasLike("%" + keyword + "%");
                CompanyInfoExample.Criteria criteria3 = companyInfoExample.createCriteria().andRoundsLike("%" + keyword + "%");
                companyInfoExample.or(criteria2);
                companyInfoExample.or(criteria3);
            }
            List<CompanyInfo> companyInfos = companyInfoService.selectByExampleForStartPage(companyInfoExample, page, size);
            List<CompanyInfoVO> companyInfoVOList = new ArrayList<>();
            companyInfos.forEach(companyInfo -> {
                companyInfoVOList.add(CompanyInfoVO.assemble(companyInfo));
            });

            int count = companyInfoService.countByExample(companyInfoExample);
            HashMap<String, Object> result = new HashMap<>(16);
            result.put("total", count);
            result.put("rows", companyInfos);
            return ServerResponse.createBySuccess(result);
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }
}
