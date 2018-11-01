package com.tbc.mini.support.web.bind.support;

import org.springframework.util.StringUtils;

import java.beans.PropertyEditorSupport;
import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
 * DateConvertEditor
 */
public class DateConvertEditor extends PropertyEditorSupport {

    private SimpleDateFormat timestampFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    private SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    /* (non-Javadoc)
     * @see java.beans.PropertyEditorSupport#setAsText(java.lang.String)
     */
    @Override
    public void setAsText(String text) throws IllegalArgumentException {
//		System.out.println(">>> >>> >>> 数据转换 <<< <<< <<<");
        if (StringUtils.hasText(text)) {
            try {
                if (!text.contains(":") && text.length() == 10) {
                    super.setValue(this.dateFormat.parse(text));
                } else if (text.indexOf(":") > 0 && text.length() == 19) {
                    super.setValue(this.timestampFormat.parse(text));
                } else {
                    throw new IllegalArgumentException("Could not parse date, date format is error ");
                }
            } catch (ParseException ex) {
                IllegalArgumentException iae = new IllegalArgumentException("Could not parse date: " + ex.getMessage());
                iae.initCause(ex);
                throw iae;
            }
        }
    }

}
