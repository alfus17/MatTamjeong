
package com.mat.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.diningReview;
import com.mat.domain.kakaoReview;
import com.mat.domain.matReview;
import com.mat.service.dcReviewService;
import com.mat.service.kgReviewService;
import com.mat.service.matReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {
	
	//다이닝 코드
	@Autowired
	private dcReviewService dcReviewService;
	
	// 카카오
	@Autowired
    private kgReviewService kgReviewService;

	// 맛탐정
    @Autowired
    private matReviewService matReviewService;
    
    
    // 카카오 리뷰 가져오기
	// 음식 카테고리로 쿼리하기
    @GetMapping("/getKgReview")
    public List<kakaoReview> getKgReview(Integer StoreId) {
    	return kgReviewService.getKgReviewsByStoreId(StoreId);
    }
    
    // 다이닝코드 리뷰 가져오기
    @GetMapping("/getDCReview")
    public List<diningReview> getMatReview(Integer StoreId) {
    	return dcReviewService.getDCReviewsByStoreId(StoreId);
    }
    
    // 맛탐정 리뷰 가져오기
    @GetMapping("/getMatReview")
    public List<matReview> getNaverReview(Integer StoreId) {
    	return matReviewService.getMatReviewsByStoreId(StoreId);
    }
    
    // 모든 리뷰들 가져오기
    @GetMapping("/getAllReview")
    public HashMap<String,Object> getAllReviews(Integer StoreId) {
    	// hashMap으로 반환
    	HashMap<String,Object> reviewsMap = new HashMap<>();
    	
    	// db에서 리뷰들 각자 쿼리
    	List <matReview> matReviews = matReviewService.getMatReviewsByStoreId(StoreId);
    	List <diningReview> dcReview =  dcReviewService.getDCReviewsByStoreId(StoreId);
    	List <kakaoReview> kgReview = kgReviewService.getKgReviewsByStoreId(StoreId);
    	
    	// 리뷰 목록 hashMap에 추가 
		reviewsMap.put("matReview", matReviews);
		reviewsMap.put("dcReview", dcReview);
		reviewsMap.put("kgReview", kgReview);


    	return reviewsMap;
    }
    


}

