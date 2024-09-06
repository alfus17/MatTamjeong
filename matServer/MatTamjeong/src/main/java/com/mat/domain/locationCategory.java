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
@Entity(name="location_category")
@Table(name="location_category")
public class locationCategory {
	@Id
	@Column(name="location_category")
	@NonNull
	@GeneratedValue
	private String locationCategory;
	

}
