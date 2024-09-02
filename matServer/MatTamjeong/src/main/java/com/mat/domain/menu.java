package com.mat.domain;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity(name="menu")
@Table(name="menu")
public class menu {
	   /* 	menu Table
	 * 	메뉴ID (PK) 	: menu_id
	 *  가게ID 		: store_id
	 * 	카테고리		: food_category
	 * 	가격 			: price
	 * 	메뉴사진URL	: image_url
	 */
	 
	// 메뉴ID
	@Id
	@Column(name="menu_id")
	@NonNull
	private int menuId;
	
	// 가게ID
	@Id
	@Column(name="store_id")
	@NonNull
	private String storeId;

	// 카테고리	
	@Id
	@Column(name="food_category")
	@NonNull
	private String foodCategory;
	
	// 가격
	@Id
	@Column(name="price")
	@NonNull
	private int price;
	
	// 메뉴사진URL
	@Id
	@Column(name="image_url")
	@NonNull
	private String imageUrl;

	

}
