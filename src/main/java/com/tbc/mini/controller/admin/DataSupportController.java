package com.tbc.mini.controller.admin;


import com.tbc.mini.support.download.DownloadComponent;
import com.tbc.mini.support.entity.ServerResponse;
import com.tbc.mini.support.web.base.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;


/**
 * @author 高巍
 * @createTime 2018年11月01日 11:22
 * @description 后台机构控制器
 */
@RestController
@RequestMapping("/admin/excel/")
public class DataSupportController extends BaseController {


    @Autowired
    private DownloadComponent downloadComponent;

    @Value("${uploadPath.excel}")
    private String targetPath;

    @Value("${downloadPath.excel}")
    private String templateFile;

    private static final String FILE_NAME = "COMPANY_LIST.xlsx";



    @PostMapping(value = "import")
    public ServerResponse importExcel(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        try {
            String saveName = FILE_NAME;
            String filePath = targetPath;
            File dir = new File(filePath);
            if (!dir.exists()) {
                dir.mkdirs();
            }else{
                File checkFile = new File(filePath, saveName);
                if(checkFile.exists()){
                    return ServerResponse.createByErrorMessage("数据正在解析，请稍后上传！");
                }
            }
            file.transferTo(new File(filePath, saveName));
            return ServerResponse.createBySuccess("上传成功！");
        } catch (Exception e) {
            return super.errorParsing(e);
        }
    }


    @GetMapping(value="download")
    public ServerResponse downloadPlist(HttpServletRequest request,
                              HttpServletResponse response) {
        String filePath = templateFile;
        try {
            downloadComponent.download(request, response, filePath,"机构数据导入模板.xlsx");
            return ServerResponse.createBySuccess("下载成功！");
        } catch (IOException e) {
            return super.errorParsing(e);
        }
    }
}
