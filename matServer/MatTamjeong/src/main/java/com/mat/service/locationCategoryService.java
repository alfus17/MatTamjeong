package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.kakaoReview;
import com.mat.domain.locationCategory;
import com.mat.repository.locationCategoryRepository;

@Service
public class locationCategoryService {
	
	@Autowired
	private locationCategoryRepository locationCategoryRepository;
	
	/* 	카테고리 아이디를 반환하는 메소드
	 * 	카테고리 이름이 들어올 경우 해당 카테고리 아이디를 반환
	 * 	만약 카테고리가 없을 경우 -1을 반환
	 */
	public int getCategoryId(String categoryName) {
		System.out.println("categoryName : "+categoryName); 
		// 객체에서  카테고리 이름만 가져오기
		Optional<locationCategory> lcObject=locationCategoryRepository.findByCategoryNameContaining(categoryName);
		// 지역카테고리 id
		if (lcObject.isPresent()) {
		    // 값이 존재할 때 처리
			System.out.println("카테고리 값이 존재함 ");
		    System.out.println(lcObject.get());
		    return lcObject.get().getLCCategory();
		} else {
		    // 값이 없을 때 처리
		    System.out.println("locationCategory 값이 존재하지 않습니다.");
		    return -1;
		}
	}

	public List<locationCategory> getLCList() {
		return locationCategoryRepository.findAll();
		
	}

}
