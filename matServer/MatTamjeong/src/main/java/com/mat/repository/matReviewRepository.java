package com.mat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.matReview;

public interface matReviewRepository extends JpaRepository<matReview, Integer>{

	Optional<matReview> findByStoreId(Integer storeId);

}
