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

/* 	Store Table
 * 	가게 ID (PK) 	: store_id				number
 *  가게 이름 		: store_name			varchar2(20)
 * 	가게 주소		: store_address			varchar2(100)
 * 	지도위치(lat) 	: store_location_lat	double
 *	지도위치(lat)	: store_location_lng	double
 * 	영업시간		: business_hours		varchar2(20)
 * 	상세정보		: details				varchar2(1000)
 * 	음식카테고리 		: food_category			number
 * 	지역카테고리 		: location_category		number
 * 	메뉴사진 		: menul_url				varchar2(60)
 * 	생성일			: created_at			date
 * 	수정일 		: update_at				date
 * 	리뷰ID(네이버)	: nv_review_id(FK)		varchar2(10)
 * 	리뷰ID(kg맵)	: kg_review_id(FK)		varchar2(10)
 * 	리뷰ID(맛탐정)	: mat_review_id(FK)		varchar2(10)
 */

@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity(name="STORE")
@Table(name="STORE")
public class Store {
	
	
	//가게 고유 ID
	// 추후에 시퀀스 추가 예정
	@Id
	@Column(name="store_id")
	@SequenceGenerator (
			name = "storeseq",
			sequenceName = "storeseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="store_id")
	private int storeId;
	
	// 가게 이름
	@Column(name="store_name" ,length=20)
	private String storeName;
	
	// 가게 주소
	@Column(name="store_address" ,length=100)
	private String storeAddress;
	
	// 가게 위성 주소(lat)
	@Column(name="store_location_lat")
	private double storeLocationLat;
	
	// 가게 위성 주소(lng)
	@Column(name="store_location_lng")
	private double storeLocationLng;

	
	// 가게 영업시간
	@Column(name="business_hours" ,length=60)
	private String businessHours;
	
	// 가게 상세정보
	@Column(name="details" ,length=1000)
	private String details;
	
	// 메뉴사진 url
	@Column(name="menu_url" ,length=300)
	private String menuUrl;
	
	// 가게 음식 카테고리 id(FK)
	@Column(name="food_category")
	private int foodCategoryId;
	
	// 가게 지역 카테고리 id(FK)
	@Column(name="location_category")
	private int locationCategoryId;
	
	// 생성날짜
	@CreatedDate
	@Column(name="created_at")
	private LocalDateTime createdAt;
	
	// 수정날짜
	@LastModifiedDate
	@Column(name="update_at")
	private LocalDateTime updateAt;

	
	
}
