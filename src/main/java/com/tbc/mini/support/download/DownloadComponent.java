package com.tbc.mini.support.download;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;


/**
 * @author fyh
 * 
 */
@Slf4j
@Component
public class DownloadComponent {


	public void download(HttpServletRequest request,
                         HttpServletResponse response, String filePath) throws IOException {
		download(request, response, filePath, "");
	}


	public void download(HttpServletRequest request,
                         HttpServletResponse response, String filePath, String displayName)
			throws IOException {
		// download目标file

		File file = new File(filePath);

		// file显示文件名
		if (StringUtils.isEmpty(displayName)) {
			displayName = file.getName();
		}


		// 判断浏览器类型
		String userAgent = request.getHeader("User-Agent");
		boolean isFirefox = (userAgent != null)
				&& (userAgent.toLowerCase().indexOf("firefox") != -1);
		boolean isChrome = (userAgent != null)
				&& (userAgent.toLowerCase().indexOf("chrome") != -1);
		boolean isedge = (userAgent != null)
				&& (userAgent.toLowerCase().indexOf("edge") != -1);
		response.reset();
		response.setHeader("Pragma", "No-cache");
		response.setHeader("Cache-Control", "must-revalidate, no-transform");
		response.setDateHeader("Expires", 0L);
		response.setContentType("application/x-download");
		response.setContentLength((int) file.length());

		String displayFilename = displayName.substring(displayName
				.lastIndexOf("_") + 1);
		displayFilename = displayFilename.replace(" ", "_");
		 if(isedge) {
				//edge
				displayFilename = URLEncoder.encode(displayFilename, "UTF-8");
				response.setHeader("Content-Disposition", "attachment;filename=\""
						+ displayFilename + "\"");
			}
		 else if (isFirefox) {
			//firefox浏览器
			displayFilename = new String(displayFilename.getBytes("UTF-8"),
					"ISO8859-1");
			response.setHeader("Content-Disposition", "attachment;filename="
					+ displayFilename);
		} else if (isChrome) {
			//chrom浏览器
			displayFilename = new String(displayFilename.getBytes("UTF-8"),
					"ISO8859-1");
			response.setHeader("Content-Disposition", "attachment;filename="
					+ displayFilename);
		} else {
			//默认
			displayFilename = URLEncoder.encode(displayFilename, "UTF-8");
			response.setHeader("Content-Disposition", "attachment;filename=\""
					+ displayFilename + "\"");
		}

		BufferedInputStream is = null;
		OutputStream os = null;
		try {
			os = response.getOutputStream();
			is = new BufferedInputStream(new FileInputStream(file));
			IOUtils.copy(is, os);
		} catch (Exception ex) {
			log.error("下载文件时发生异常：", ex);
		} finally {
			IOUtils.closeQuietly(is);
		}
	}

}
