package com.tbc.mini.common.exception;

/**
 * @author GV
 * Date:2018/4/15
 * Time:下午10:14
 */

public class TokenErrorException extends RuntimeException {
    public TokenErrorException() {
    }

    public TokenErrorException(String message) {
        super(message);
    }
}
