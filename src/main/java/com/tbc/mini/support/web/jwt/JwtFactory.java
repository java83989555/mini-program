package com.tbc.mini.support.web.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

/**
 * @author GV
 * Date:2018/5/23
 * Time:下午1:16
 */

public class JwtFactory {
    private static final String BASE_64KEY = "Y24uaXRjYXN0LmFwaXM=";

    //一天
    public static final Long ONE_DAY = 1000 * 60 * 60 * 24L;

    /**
     * 生成用户令牌
     *
     * @param userId
     * @return
     */
    public static String generateUserToken(String userId) {
        return Jwts.builder().
                //该JWT所面向的用户
                        setSubject(userId).
                //签发时间
                        setIssuedAt(new Date()).
                //过期时间
                        setExpiration(new Date(System.currentTimeMillis() + ONE_DAY)).
                //在此时间前不可使用
                        setNotBefore(new Date()).
                //签发者
                        setIssuer("太和资本").
                        signWith(SignatureAlgorithm.HS256, BASE_64KEY).
                        compact();
    }

    /**
     * 从令牌中取出用户名
     *
     * @param token
     * @return
     */
    public static String getTokenUserId(String token) {
        String userName;
        try {
            userName = Jwts.parser().setSigningKey(BASE_64KEY).parseClaimsJws(token).getBody().getSubject();
            return userName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
