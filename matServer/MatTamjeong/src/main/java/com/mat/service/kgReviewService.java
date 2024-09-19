package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.repository.kakaoReviewRepository;

@Service
public class kgReviewService {
	
	@Autowired
	private kakaoReviewRepository kakaoReviewRepository;

	// 카카오 리뷰 가져오기
	public List<kakaoReview> getKgReviewsByStoreId(Integer kgReviewId  ) {
		return kakaoReviewRepository.findByStoreId(kgReviewId);
	}
	// 카카오리뷰 페이지네이션으로 가져오
	public Page<kakaoReview> getKgReviewsByStoreId(Integer kgReviewId ,Pageable pageable ) {
		return kakaoReviewRepository.findByStoreId(kgReviewId,pageable);
	}

	// 평균 별점 쿼리하기
	public double getStoreRating(int storeId) {
	
		return kakaoReviewRepository.getStoreRating(storeId);
		
	}

}
