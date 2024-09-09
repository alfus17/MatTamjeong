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
@Entity(name="food_category")
@Table(name="food_category")
public class foodCategory {
	   /* 	locationCategory Table
	 * 	음식 카테고리 (PK)	 		: FDCategory		Number
	 *  카테고리 이름 				: category_name		varchar(20)

	 */
	
	@Id
	@SequenceGenerator(
			name = "FDCategoryseq",
			sequenceName = "FDCategoryseq",
			allocationSize = 1
			)
	@GeneratedValue(generator = "FDCategoryseq")
	private int FDCategory;
	
	// 카테고리 이름
	@Column(name="category_Name" , length=20)
	@NonNull
	private String categoryName;

}
