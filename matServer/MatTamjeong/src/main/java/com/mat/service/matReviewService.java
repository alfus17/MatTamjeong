package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.domain.matReview;
import com.mat.repository.matReviewRepository;

@Service
public class matReviewService {
	
	@Autowired
	private matReviewRepository matReviewRepository;
	
	// 해당가게아이디의 맛탐정 리뷰들 리턴
	public List<matReview> getMatReviewsByStoreId(Integer StoreId ) {
		return matReviewRepository.findByStoreId(StoreId);
	}
	
	// 해당가게아이디의 맛탐정 리뷰들 페이지로 리턴
		public Page<matReview> getMatReviewsByStoreId(Integer StoreId ,Pageable pageable ) {
			return matReviewRepository.findByStoreId(StoreId ,pageable);
		}

	// 평균 별점
	public double getStoreRating(int storeId) {
		return matReviewRepository.getStoreRating(storeId);
	}
}
