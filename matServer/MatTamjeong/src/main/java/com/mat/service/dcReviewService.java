package com.mat.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.domain.diningReview;
import com.mat.repository.naverReviewRepository;

@Service
public class dcReviewService {
	
	@Autowired
	private naverReviewRepository naverReviewRepository;

	// 카카오 리뷰 가져오기
	public Optional<diningReview> getKgReview(Long nvReviewId ) {
		return naverReviewRepository.findById(nvReviewId);
	}
	
	
}
