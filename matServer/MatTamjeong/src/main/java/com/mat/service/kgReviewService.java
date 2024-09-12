package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.repository.kakaoReviewRepository;

@Service
public class kgReviewService {
	
	@Autowired
	private kakaoReviewRepository kakaoReviewRepository;

	// 카카오 리뷰 가져오기
	public List<kakaoReview> getKgReviewsByStoreId(Integer kgReviewId ) {
		return kakaoReviewRepository.findByStoreId(kgReviewId);
	}

	// 평균 별점 쿼리하기
	public double getStoreRating(int storeId) {
	
		return kakaoReviewRepository.getStoreRating(storeId);
		
	}

}
