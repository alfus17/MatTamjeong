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
@Entity(name="location_category")
@Table(name="location_category")
public class locationCategory {
	   /* 	locationCategory Table
	 * 	지역 카테고리 (PK)	 		: LCCategory		Number
	 *  카테고리 이름 				: category_name		varchar(20)
	 *  해당위성 좌표 lat			: location_lat		double
	 *  해당위성 좌표 lng 			: location_lng		double
	 */
	
	@Id
	@SequenceGenerator(
			name = "LCCategoryseq",
			sequenceName = "LCCategoryseq",
			allocationSize = 1
			)
	@GeneratedValue(generator = "LCCategoryseq")
	private int LCCategory;
	
	// 카테고리 이름
	@Column(name="category_Name" , length=20)
	@NonNull
	private String categoryName;
	
	// 카테고리 lat
	@Column(name="location_lat")
	@NonNull
	private String lactionLat;

	// 카테고리 lng
	@Column(name="location_lng")
	@NonNull
	private String lactionLng;
	
}
