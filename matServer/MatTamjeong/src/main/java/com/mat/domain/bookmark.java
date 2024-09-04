package com.mat.domain;

import java.time.LocalDateTime;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity(name="bookmark")
@Table(name="bookmark")
public class bookmark {
	 
    /* 	bookmark Table
 * 	즐겨찾기 ID (PK) 		: bookmark_id
 *  가게ID 	(PK)(FK)	: store_id
 * 	생성일				: created_at
 * 	수정일 				: update_at
 * 	메뉴ID(FK)			: menu_id
 */	
 
	 
	// 	즐겨찾기 ID (PK) 
	@Id
	@Column(name="bookmark_id")
	@NonNull
	@GeneratedValue
	private String bookmarkId;
	
	// 가게ID (PK)(FK)
	@Column(name="store_id")
	@NonNull
	private String storeId;

	// 생성일	
	@Column(name="created_at")
	@NonNull
	private LocalDateTime createdTime;
	
	// 수정일 
	@Column(name="update_at")
	private LocalDateTime updateTime;
	
	// 메뉴ID(FK)
	@Column(name="menu_id")
	@NonNull
	private int menuId;

	

}
