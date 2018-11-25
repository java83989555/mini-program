package com.tbc.mini.modal.vo;

import com.tbc.mini.modal.pojo.CompanyInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author 高巍
 * @createTime 2018年11月17日 16:41
 * @description 小程序公司列表视图对象
 */
@Data
@AllArgsConstructor
@Builder
public class CompanyInfoVO {
    private Integer companyInfoId;
    /**
     * 公司名称
     */
    private String name;
    /**
     * 公司Logo url
     */
    private String logoUrl;
    private String prefix;
    /**
     * 描述
     */
    private List<String> areaList;


    public static final String FRONT_BRACKET = "(";
    public static final String BACK_BRACKET = "\\)";
    public static final String EXCLUDE_ITEM = "不限";

    public static CompanyInfoVO assemble(CompanyInfo companyInfo) {
        String name = companyInfo.getName();
        String logoUrl = companyInfo.getImg();
        String descTemp = companyInfo.getAreas();
        List<String> areaList = parseAreas(descTemp);

        //移除不限
        if (areaList.get(0).contains(EXCLUDE_ITEM)) {
            areaList = areaList.size() > 6 ? areaList.subList(1, 6) : areaList.subList(0, areaList.size());
        }
        return CompanyInfoVO.builder().companyInfoId(companyInfo.getId()).name(name).logoUrl(logoUrl).prefix("投资领域").areaList(areaList).build();
    }

    public static List<String> parseAreas(String areas) {
        if (!areas.contains(FRONT_BRACKET)) {
            return Collections.singletonList(areas);
        }
        Pattern p = Pattern.compile(BACK_BRACKET);
        Matcher m = p.matcher(areas);
        /*将句子结束符连接到相应的句子后*/
        String[] words = p.split(areas);
        if (words.length > 0) {
            int count = 0;
            while (count < words.length) {
                if (m.find()) {
                    words[count] += m.group();
                }
                count++;
            }
        }
        return Arrays.asList(words);
    }

    public static void main(String[] args) {
        String s = "不限(53)电商(2)社交(1)硬件(1)文娱传媒(4)工具(1)消费生活(4)金融(4)企业服务(10)旅游(1)房产家居(9)教育(2)汽车交通(10)物流(3)VR·AR(1)";
        System.out.println(parseAreas(s));
    }

    public static List<String> parseRounds(String rounds) {

        return parseAreas(rounds);
    }
}
