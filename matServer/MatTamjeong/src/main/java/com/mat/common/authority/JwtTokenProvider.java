package com.mat.common.authority;

import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;

//import org.apache.tomcat.util.net.openssl.ciphers.Authentication;

import lombok.Value;

public class JwtTokenProvider {
//	private final String secretKey = "jonmattengguri";
//	private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 1일
//	
//	/*
//	 * JWT 토큰 생성
//	 */
//	public TokenInfo createToken(Authentication authentication) {
//	    String authorities = authentication.getAuthorities().stream()
//	            .map(GrantedAuthority::getAuthority).collect(Collectors.joining(","));
//	    Date now = new Date();
//	    Date accessExpiration = new Date(now.getTime() + EXPIRATION_TIME);
//
//	    String jwt = Jwts.builder()
//	            .subject(authentication.getName())
//	            .claim("auth", authorities)
//	            .claim("userId", ((CustomUser) authentication.getPrincipal()).getUserId())
//	            .issuedAt(now)
//	            .expiration(accessExpiration)
//	            .signWith(getKey(), Jwts.SIG.HS256)
//	            .compact();
//
//	    return new TokenInfo("Bearer", jwt);
//	}


}
