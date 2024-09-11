package com.mat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mat.domain.matReview;

public interface matReviewRepository extends JpaRepository<matReview, Integer>{

	 List<matReview> findByStoreId(Integer storeId);

	@Query("SELECT COALESCE( AVG(m.rating) ,0) FROM MAT_REVIEW m WHERE m.storeId = :storeid")
	double getStoreRating(@Param("storeid") int storeId);

}
