package com.mat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.service.StoreService;
import com.mat.service.dcReviewService;
import com.mat.service.foodCategoryService;
import com.mat.service.kgReviewService;
import com.mat.service.locationCategoryService;
import com.mat.service.matReviewService;

@RestController
@RequestMapping("/DetailPage")
public class DetailPageController {

	//다이닝 코드
	@Autowired
	private dcReviewService dcReviewService;
	
	// 카카오
	@Autowired
    private kgReviewService kgReviewService;

	// 맛탐정
    @Autowired
    private matReviewService matReviewService;
    
    // 게게 정보
    @Autowired
	private StoreService storeService;
    
    // 지역 카테고리
	@Autowired
	private locationCategoryService locationCategoryService;
	
	// 음식 카테고리
	@Autowired
	private foodCategoryService foodCategoryService;

	/*
	 * req : 가게 아이디
	 * res : 가계의 별점들, 가게 정보, 맛탐정 리뷰들 , 메뉴
	 * 
	 */
	
	
//	//
//	@PostMapping("")
//	public 
	
	
}
