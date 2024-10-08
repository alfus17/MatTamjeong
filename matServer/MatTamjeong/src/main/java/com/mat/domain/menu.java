package com.mat.domain;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity(name="MENU")
@Table(name="MENU")
public class menu {
	   /* 	menu Table
	 * 	메뉴ID (PK) 	: menu_id			number
	 * 	메뉴 이름 		: menu_name 		varchar2(30)	
	 *  가게ID 		: store_id			varchar2(10)
	 * 	카테고리		: food_category		varchar2(70)
	 * 	가격 			: price				number
	 * 	메뉴사진URL	: image_url			varchar2(100)
	 */
	 
	// 메뉴ID
	@Id
	@Column(name="menu_id")
	@SequenceGenerator (
			name = "matseq",
			sequenceName = "matseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="matseq")
	private int menuId;
	
	// 가게ID
	@Column(name="menu_name" ,length=30)
	@NonNull
	private String menuName;
	
	// 가게ID
	@Column(name="store_id" ,length=10)
	@NonNull
	private int storeId;

	// 카테고리	
	@Column(name="food_category",length=70)
	@NonNull
	private String foodCategory;
	
	// 가격
	@Column(name="price")
	@NonNull
	private int price;
	
	// 메뉴사진URL
	@Column(name="image_url" ,length=100)
	@NonNull
	private String imageUrl;

	

}
