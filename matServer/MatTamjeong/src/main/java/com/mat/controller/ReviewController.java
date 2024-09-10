
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
    public Optional<kakaoReview> getKgReview(Integer StoreId) {
    	return kgReviewService.getKgReview(StoreId);
    }
    
    // 다이닝코드 리뷰 가져오기
    @GetMapping("/getDCReview")
    public Optional<diningReview> getMatReview(Integer StoreId) {
    	return dcReviewService.getDCReview(StoreId);
    }
    
    // 맛탐정 리뷰 가져오기
    @GetMapping("/getMatReview")
    public Optional<matReview> getNaverReview(Integer StoreId) {
    	return matReviewService.getMatReview(StoreId);
    }
    
    // 모든 리뷰들 가져오기
    @GetMapping("/getAllReview")
    public HashMap<String,Object> getAllReviews(Integer StoreId) {
    	// hashMap으로 반환
    	HashMap<String,Object> reviewsMap = new HashMap<>();
    	
    	// db에서 리뷰들 각자 쿼리
    	Optional <matReview> matReview = matReviewService.getMatReview(StoreId);
    	Optional <diningReview> dcReview =  dcReviewService.getDCReview(StoreId);
    	Optional <kakaoReview> kgReview = kgReviewService.getKgReview(StoreId);
    	
    	// 리뷰 목록이 있을경우 hashMap에 추가 
    	if (matReview.isPresent()) {
    		reviewsMap.put("matReview", matReview.get());
    	}
    	if (dcReview.isPresent()) {
    		reviewsMap.put("dcReview", dcReview.get());
    	}
    	if (kgReview.isPresent()) {
    		reviewsMap.put("kgReview", kgReview.get());
    	}

    	return reviewsMap;
    }
    


}

