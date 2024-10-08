package com.mat.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity(name="user_Info")
@Table(name="user_Info")
public class userInfo {
    /* 	user_info Table
 *  회원번호 	(pk)	: user_no 			long(20) 
 * 	회원 ID  	(fk)	: user_id			varchar2(20)
 * 	비밀번호 			: user_pwd			varchar2(30) 
 * 	이름 				: user_name 		varchar2(60)
 * 	가입일자 			: member_join_date	Date
 *  닉네임  			: nickname			varchar2(20)
 *  생년월일 			: user_birth		varchar2(6)
 *  이메일 			: user_email		varchar2(100)
 *  이미지 경로 		: img_path			varchar2(200)
 *  주소 				: user_address		varchar2(100)
 * 	상태				: user_status		varchar2(5)
 * 	즐겨찾기(FK)		: bookmark_id		varchar2(10)
 * 	auth(사용여부미정)	: auth				varchar2(1000)
 */
	// 회원 ID (PK)(FK)
	// 백엔드 쪽에서 FK 처리예정
	
	// pk키
	@Id
	@Column(name="user_No" ,length=20)
	@NonNull
	@SequenceGenerator (
			name = "userseq",
			sequenceName = "userseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="user_No")
	private Long userNo;
	
	// userId
	@Column(name="user_id" ,length=20)
	@NonNull
	private String userId;
	
	//  pwd
	@Column(name="user_pwd" ,length=30)
	@NonNull
	private String userPwd;
	
	//  이름
	@Column(name="user_name" ,length=60)
	@NonNull
	private String userName;
	
	//  가입일자
	@CreatedDate
	@Column(name="create_at", columnDefinition = "DATE DEFAULT SYSDATE" )
	@NonNull
	private LocalDateTime createAt;
	
	//  닉네임
	@Column(name="nickname" ,length=20)
	@NonNull
	private String nickName;
	
	//  생년월일
	@Column(name="user_birth" ,length=100)
	@NonNull
	private String userBirth;
	
	//  이메일
	@Column(name="email" ,length=100)
	@NonNull
	private String email;
	
	//  주소
	@Column(name="user_address" ,length=100)
	private String userAddress;
	
	//  이미지 경로
	@Column(name="img_path" ,length=2000)
	@NonNull
	private String imgPath;

	// 상태	
	@Column(name="user_status" ,length=5)
	private String userStatus;
	
	// 즐겨찾기(FK)
	@Column(name="bookmark_id" ,length=10) 
	private String bookmarkId;
	
	// auth( 사용여부 미정
	@Column(name="auth" ,length=1000)
	private String auth;


	

}
