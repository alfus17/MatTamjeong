package com.mat.common.authority;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JwtToken {
    private final String SECRET_KEY = "MatTameJeongSecretKey20241202MatTameJeongSecretKey20241202MatTameJeongSecretKey20241202MatTameJeongSecretKey20241202MatTameJeongSecretKey20241202"; // 실제 환경에서는 환경 변수로 관리

    // JWT 토큰 생성
    public String generateToken(String userId) {
    	
    	// 이부분에 userId 검증로직이 필요함 
    	if(userId.length()> 0 && userId.length()<20) {
    		
    	}
    	
        return Jwts.builder()
                .setSubject(userId)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1시간 유효
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    // JWT 토큰에서 userId 추출
    public String extractUserId(String token) {
    	System.out.println("token");
        return getClaims(token).getSubject();
    }

    // JWT 토큰 만료 여부 확인
    public boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

    // 토큰에서 Claims 추출
    private Claims getClaims(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }
    

}
