package com.mat.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.kakaoReview;
import com.mat.service.StoreService;
import com.mat.service.dcReviewService;
import com.mat.service.kgReviewService;
import com.mat.service.matReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {

    @Autowired
    private dcReviewService dcReviewService;

    @Autowired
    private kgReviewService kgReviewService;

    @Autowired
    private matReviewService matReviewService;
    
    
    // 카카오 리뷰 가져오기
    @GetMapping("/getKgReview")
    public Optional<kakaoReview> getKgReview(Long kgReviewId) {
    	return kgReviewService.getKgReview(kgReviewId);
    }
    
    // 네이버 리뷰 가져오기
    @GetMapping("/getMatReview")
    public Optional<kakaoReview> getMatReview(Long nvReviewId) {
    	return kgReviewService.getKgReview(nvReviewId);
    }
    
    // 맛탐정 리뷰 가져오기
    @GetMapping("/getNaverReview")
    public Optional<kakaoReview> getNaverReview(Long matReviewId) {
    	return kgReviewService.getKgReview(matReviewId);
    }
    


}
