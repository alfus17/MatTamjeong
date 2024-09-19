package com.mat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mat.domain.Store;
import com.mat.domain.kakaoReview;

public interface kakaoReviewRepository extends JpaRepository<kakaoReview, Integer> {

	List<kakaoReview> findByStoreId(Integer kgReviewId);

	Page<kakaoReview> findByStoreId(Integer kgReviewId, Pageable pageable);

	@Query("SELECT COALESCE( AVG(m.rating) ,0) FROM KAKAO_REVIEW m WHERE m.storeId = :storeid")
	double getStoreRating(@Param("storeid") int storeId);
}
