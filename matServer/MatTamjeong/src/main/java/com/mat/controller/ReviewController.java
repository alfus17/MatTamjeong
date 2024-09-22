package com.mat.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.diningReview;
import com.mat.domain.kakaoReview;
import com.mat.domain.matReview;
import com.mat.service.dcReviewService;
import com.mat.service.kgReviewService;
import com.mat.service.matReviewService;

import oracle.jdbc.proxy.annotation.Post;

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
    
    
    // 정렬 설정
	Sort sort = Sort.by(Sort.Order.desc("rating"));

    
    // 카카오 리뷰 가져오기
	// 음식 카테고리로 쿼리하기
    @GetMapping("/getKgReview/{StoreId}")
    public List<kakaoReview> getKgReview(@PathVariable("StoreId") Integer StoreId ) {
    	// hashMap으로 반환
    	return kgReviewService.getKgReviewsByStoreId(StoreId);
    }
    
    // 다이닝코드 리뷰 가져오기
    @GetMapping("/getDCReview/{StoreId}")
    public List<diningReview> getMatReview(@PathVariable("StoreId") Integer StoreId) {
    	// hashMap으로 반환
    	return dcReviewService.getDCReviewsByStoreId(StoreId);
    }
    
    // 맛탐정 리뷰 가져오기
    @GetMapping("/getMatReview/{StoreId}")
    public List<matReview> getNaverReview(@PathVariable("StoreId") Integer StoreId ) {
    	// hashMap으로 반환
    	return matReviewService.getMatReviewsByStoreId(StoreId);
    }
    
    // 페이지네이션으로 가져오기
    // 카카오 리뷰 가져오기
	// 음식 카테고리로 쿼리하기
    @GetMapping("/getKgReview/{StoreId}/{page}")
    public List<kakaoReview> getKgReview(@PathVariable("StoreId") Integer StoreId , @PathVariable("page") String page ) {
    	int intPage = Integer.parseInt(page);
    	Pageable pageable = PageRequest.of(intPage-1, 10, sort);
    	// hashMap으로 반환
    	return kgReviewService.getKgReviewsByStoreId(StoreId,pageable).getContent();
    }
    
    // 다이닝코드 리뷰 가져오기
    @GetMapping("/getDCReview/{StoreId}/{page}")
    public List<diningReview> getMatReview(@PathVariable("StoreId") Integer StoreId, @PathVariable("page") String page ) {
    	int intPage = Integer.parseInt(page);
    	Pageable pageable = PageRequest.of(intPage-1, 10, sort);
    	// hashMap으로 반환
    	return dcReviewService.getDCReviewsByStoreId(StoreId,pageable).getContent();
    }
    
    // 맛탐정 리뷰 가져오기
    @GetMapping("/getMatReview/{StoreId}/{page}")
    public List<matReview> getNaverReview(@PathVariable("StoreId") Integer StoreId, @PathVariable("page") String page ) {
    	int intPage = Integer.parseInt(page);
    	Pageable pageable = PageRequest.of(intPage-1, 10, sort);
    	// hashMap으로 반환
    	return matReviewService.getMatReviewsByStoreId(StoreId,pageable).getContent();
    }
    
    
    // 모든 리뷰들 가져오기
    @GetMapping("/getAllReview/{StoreId}/{page}")
    public HashMap<String,Object> getAllReviews(@PathVariable("StoreId") Integer StoreId, @PathVariable("page") String page  ) {
    	int intPage = Integer.parseInt(page);
    	// 모든 리뷰들 한하여 페이지네이션 처리
    	// 페이지네이션
    	Pageable pageable = PageRequest.of(intPage-1, 10, sort);
    	
    	HashMap<String,Object> reviewsMap = new HashMap<>();
    	
    	//Page<Object> 형식이라서 .getContent 해줘야함
    	
    	// db에서 리뷰들 각자 쿼리
    	List <matReview> matReviews = matReviewService.getMatReviewsByStoreId(StoreId, pageable).getContent();
    	List <diningReview> dcReview =  dcReviewService.getDCReviewsByStoreId(StoreId ,pageable).getContent();
    	List <kakaoReview> kgReview = kgReviewService.getKgReviewsByStoreId(StoreId , pageable).getContent();
    	
    	// 리뷰 목록 hashMap에 추가 
		reviewsMap.put("matReview", matReviews);
		reviewsMap.put("dcReview", dcReview);
		reviewsMap.put("kgReview", kgReview);


    	return reviewsMap;
    }
    /* storeId
     * userId
     * matReviewContent
     * 
     * 
     * 
     */
    // 맛탐정 리뷰 등록 
    @PostMapping("/regMatReview")
    public boolean registerReview(@RequestBody matReview reivew) {
    	boolean flag = false;
    	// 로그 찍기
    	System.out.println("matReview : " + reivew);
    	
    	// userID로 해당 가게의 리뷰가 있는지 확인 
    	Optional<matReview> checkresult =matReviewService.findReviewByUserId(reivew.getUserId(), reivew.getStoreId());
    	if(! checkresult.isPresent()) {
    		flag = matReviewService.registReview(reivew);
    	}else {
    		System.out.println("기존의 아이디로 리뷰를 쓴 기록이 존재함 : "+ checkresult.get());
    	}

    	return flag;
    }

}
