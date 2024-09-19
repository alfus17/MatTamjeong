package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.domain.diningReview;
import com.mat.repository.diningReviewRepository;

@Service
public class dcReviewService {
	
	@Autowired
	private diningReviewRepository diningReviewRepository;

	// 다이닝코드리뷰 가져오기
	public List<diningReview> getDCReviewsByStoreId(Integer StoreId ) {
		return diningReviewRepository.findByStoreId(StoreId);
	}
	
	// 다이닝코드 리뷰 가져오기
		public Page<diningReview> getDCReviewsByStoreId(Integer StoreId ,Pageable pageable ) {
			return diningReviewRepository.findByStoreId(StoreId , pageable);
		}
	
	// 가게 평정 평균으로 구하기 
	public double getStoreRating(int storeId) {
		System.out.println((diningReviewRepository.getStoreRating(storeId)));
		System.out.println("dcReviewService : ");
		return 0.0;
	}
	
	
}
