package com.mat.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

/* 	Store Table
 * 	가게 ID (PK) : store_id
 *  가게 이름 		: store_name
 * 	가게 주소		: store_address
 * 	지도위치(lat) 	: store_location_lat
 *	지도위치(lat)	: store_location_lng
 * 	영업시간		: business_hours
 * 	상세정보		: details
 * 	음식카테고리 	: food_category
 * 	생성일		: created_at
 * 	수정일 		: update_at
 * 	상태 			: store_status
 * 	리뷰ID(네이버)	: nv_review_id(FK)
 * 	리뷰ID(kg맵)	: kg_review_id(FK)
 * 	리뷰ID(맛탐정)	: mat_review_id(FK)
 */

@Data
@NoArgsConstructor
@Entity(name="Store")
@Table(name="Store")
public class Store {
	//가게 고유 ID
	@Id
	@Column(name="store_id")
	@GeneratedValue
	private String storeId;
	
	// 가게 이름
	@Column(name="store_name")
	
	private String storeName;
	
	// 가게 주소
	@Column(name="store_address")
	
	private String storeAddress;
	
	// 가게 위성 주소(lat)
	@Column(name="store_location_lat")
	
	private double storeLocationLat;
	
	// 가게 위성 주소(lng)
	@Column(name="store_location_lng")
	
	private double storeLocationLng;

	
	// 가게 영업시간
	@Column(name="business_hours")
	
	private String businessHours;
	
	// 가게 상세정보
	@Column(name="details")
	private String details;
	
	// 가게 음식 카테고리
	@Column(name="food_category")
	private String foodCategory;
	
	// 생성날짜
	@CreatedDate
	@Column(name="created_at")
	
	private LocalDateTime createdAt;
	
	// 수정날짜
	@LastModifiedDate
	@Column(name="update_at")
	private LocalDateTime updateAt;
	
	// 가게 상태
	@Column(name="store_status")
	private char storeStatus;
	
	// 가게 이미지
	@Column(name="store_imgurl")
	private String storeimg;
	
	// 가게 지역 카테고리 (헤시테그용)
	@Column(name="storecategory")
	private String storecate;
}
