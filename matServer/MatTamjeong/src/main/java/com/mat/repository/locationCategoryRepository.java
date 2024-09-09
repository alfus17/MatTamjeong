package com.mat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.locationCategory;

public interface locationCategoryRepository  extends JpaRepository<locationCategory, Integer> {


		 Optional<locationCategory> findByCategoryNameContaining(String categoryName);

}
