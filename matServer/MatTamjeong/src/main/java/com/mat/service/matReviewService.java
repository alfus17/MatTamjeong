package com.mat.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.domain.matReview;
import com.mat.repository.matReviewRepository;

@Service
public class matReviewService {
	
	@Autowired
	private matReviewRepository matReviewRepository;
	
	// 
	public Optional<matReview> getMatReview(Long matReviewId ) {
		return matReviewRepository.findById(matReviewId);
	
	}
}
