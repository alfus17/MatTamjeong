package com.mat.service;

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
	public Optional<kakaoReview> getKgReview(Integer kgReviewId ) {
		return kakaoReviewRepository.findByStoreId(kgReviewId);
	}

}
