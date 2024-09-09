package com.mat.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.domain.diningReview;
import com.mat.repository.diningReviewRepository;

@Service
public class dcReviewService {
	
	@Autowired
	private diningReviewRepository diningReviewRepository;

	// 카카오 리뷰 가져오기
	public Optional<diningReview> getDCReview(Integer StoreId ) {
		return diningReviewRepository.findByStoreId(StoreId);
	}
	
	
}
