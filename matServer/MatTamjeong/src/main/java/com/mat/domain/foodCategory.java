package com.mat.domain;

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
@Entity(name="food_category")
@Table(name="food_category")
public class foodCategory {
	@Id
	@Column(name="food_category") 	
	@NonNull
	@GeneratedValue
	private String foodCategory;

}
