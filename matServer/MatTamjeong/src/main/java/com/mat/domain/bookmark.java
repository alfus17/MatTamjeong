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
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity(name="BOOKMARK")
@Table(name="BOOKMARK")
public class bookmark {
	 
    /* 	bookmark Table
 * 	즐겨찾기 ID (pk)시퀀스	: bookmark_id 	number
 * 	유저ID 				: user_id 		varchar2(20)		
 *  가게ID 	(PK)(FK)	: store_id 		varchar2(10)
 * 	생성일					: created_at	date
 * 	수정일 				: update_at		date
 */	
 
	 
	// 	즐겨찾기 ID =  회원 아이디(PK) 
	@Id
	@Column(name="bookmark_id" ,length=10)
	@SequenceGenerator (
			name = "bookmarkseq",
			sequenceName = "bookmarkseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="bookmarkseq")
	private int bookmarkId;
	
	// 유저ID (FK)
	@Column(name="user_id" ,length=20)
	@NonNull
	private String userId;

	
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
	
	

}
