package com.mat.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
/*
 * 	 테스트 하기 위한 도메인으로 테이블 생성확인을 위해 생성되었습니다.
 * 
 * 
 */
@Data
@NoArgsConstructor
@Entity(name="teamTest")
public class TestDomain {
	@Id
	private String id;
	@NonNull
	private String password;
	@NonNull
	private String name;
	private String email;
	private String gender;
	private String phone;
	private String address;
	
}
