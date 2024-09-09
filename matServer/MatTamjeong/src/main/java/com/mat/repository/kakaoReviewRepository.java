package com.mat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.Store;
import com.mat.domain.kakaoReview;

public interface kakaoReviewRepository extends JpaRepository<kakaoReview, Integer> {

	Optional<kakaoReview> findByStoreId(Integer kgReviewId);

}
