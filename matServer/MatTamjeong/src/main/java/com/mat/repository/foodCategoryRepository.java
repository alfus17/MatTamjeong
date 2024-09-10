package com.mat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.foodCategory;
import com.mat.domain.locationCategory;

public interface foodCategoryRepository extends JpaRepository<foodCategory, Integer> {

	Optional<foodCategory> findByCategoryNameContaining(String categoryName);

}
