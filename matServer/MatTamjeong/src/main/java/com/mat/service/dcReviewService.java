package com.mat.service;

import java.util.List;
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
	public List<diningReview> getDCReviewsByStoreId(Integer StoreId ) {
		return diningReviewRepository.findByStoreId(StoreId);
	}
	
	// 가게 평정 평균으로 구하기 
	public double getStoreRating(int storeId) {
		System.out.println((diningReviewRepository.getStoreRating(storeId)));
		System.out.println("dcReviewService : ");
		return 0.0;
	}
	
	
}
