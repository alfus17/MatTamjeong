package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.domain.matReview;
import com.mat.repository.matReviewRepository;

@Service
public class matReviewService {
	
	@Autowired
	private matReviewRepository matReviewRepository;
	
	// 해당가게아이디의 맛탐정 리뷰들 리턴
	public List<matReview> getMatReviewsByStoreId(Integer StoreId ) {
		return matReviewRepository.findByStoreId(StoreId);
	}
	
	// 해당가게아이디의 맛탐정 리뷰들 페이지로 리턴
		public Page<matReview> getMatReviewsByStoreId(Integer StoreId ,Pageable pageable ) {
			return matReviewRepository.findByStoreId(StoreId ,pageable);
		}

	// 평균 별점
	public double getStoreRating(int storeId) {
		return matReviewRepository.getStoreRating(storeId);
	}
	
	// 리뷰 등록 및 업데이트 
	public boolean  registReview(matReview reivew) {
		boolean flag  = false;
		matReview result = matReviewRepository.save(reivew);
		// null이면 오류
		if(result != null) {
			flag = !flag;
		}
		return flag;
		
	}

	// 해당유저가 해당가게에 리뷰를 남긴적이 있는지 체크 
	public Optional<matReview> findReviewByUserId(String userId , int storeId) {	
		return matReviewRepository.findByUserIdAndStoreId(userId ,storeId);
		
	}
	
	// 유저아이디로 리뷰 객체 가져오기
	public List <matReview> getReviewsByUserId(String userId) {
		List <matReview> reviews =matReviewRepository.findByUserId(userId);
		return reviews;
	}
	
	// 리뷰 삭제
	public boolean deleteReviewById(int reviewId) {
        try {
            matReviewRepository.deleteById(reviewId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
	
}
