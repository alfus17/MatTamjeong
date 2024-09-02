package com.mat.domain;

import java.time.LocalDateTime;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity(name="user")
@Table(name="user")
public class user {
	   /* 	user Table
	 * 	회원 ID (PK)	 	: user_id
	 *  비밀번호 			: user_pwd
	 * 	생년월일			: user_status
	 * 	가입일자			: signup_date
	 * 	유저토큰			: user_token
	 */
	// 회원 ID (PK)	
	@Id
	@Column(name="user_id")
	@NonNull
	private String userId;
	
	// 비밀번호 	
	@Id
	@Column(name="user_pwd")
	@NonNull
	private String userAddress;

	// 생년월일
	@Id
	@Column(name="user_status")
	@NonNull
	private String userStatus;
	
	// 가입일자
	@Id
	@Column(name="signup_date")
	@NonNull
	private LocalDateTime signupDate;
	
	
	// 유저토큰
	@Id
	@Column(name="user_token")
	private String reviewId;
	


	

}
