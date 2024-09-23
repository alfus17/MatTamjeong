package com.mat.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity(name="bookmark")
@Table(name="bookmark")
public class bookmark {
	 
    /* 	bookmark Table
 * 	즐겨찾기 ID (PK) 회원아이디 : bookmark_id 	varchar2(10)
 *  가게ID 	(PK)(FK)	: store_id 		varchar2(10)
 * 	생성일					: created_at	date
 * 	수정일 				: update_at		date
 * 	메뉴ID(FK)			: menu_id		number
 */	
 
	 
	// 	즐겨찾기 ID =  회원 아이디(PK) 
	@Id
	@Column(name="bookmark_id" ,length=10)
	@NonNull
	@GeneratedValue
	private String bookmarkId;
	
	// 가게ID (PK)(FK)
	@Column(name="store_id" ,length=10)
	@NonNull
	private String storeId;

	// 생성일	
	@Column(name="created_at")
	@CreatedDate
	private LocalDateTime createdTime;
	
	// 수정일 
	@Column(name="update_at")
	@LastModifiedDate
	private LocalDateTime updateTime;
	
	// 메뉴ID(FK)
	@Column(name="menu_id")
	@NonNull
	private int menuId;

	

}
