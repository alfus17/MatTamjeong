package com.mat.controller;

import com.mat.domain.Store;
import com.mat.domain.locationCategory;
import com.mat.domain.foodCategory;
import com.mat.service.StoreService;
import com.mat.service.foodCategoryService;
import com.mat.service.locationCategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/store")
public class StoreController {

	@Autowired
	private StoreService storeService;

	@Autowired
	private locationCategoryService locationCategoryService;

	@Autowired
	private foodCategoryService foodCategoryService;

	// 모든 Store 데이터를 반환하는 API
	@GetMapping("/getStore")
	public List<Store> getAllStores() {
		return storeService.getAllStores(); // 전체 데이터를 반환
	}

	// 지역카테고리로 쿼리하기
	/*
	 * 들어오는값 : { categoryName : "지역카테고리" } 응답값 : List<Store>
	 */
	@PostMapping("/getLCStore")
	public List<Store> getAllStoreByLc(@RequestBody locationCategory categoryName) {
		// 카테고리 비교에서 아이디 가져오기
		// 만약 입력한 카테고리의 값으로 db의 카테고리 id 체크 이후 없을경우 -1 리턴
		int categoryID = locationCategoryService.getCategoryId(categoryName.getCategoryName());
		if (categoryID != -1) {
			return storeService.getAllStoreByLc(categoryID); // 전체 데이터 반환
		} else {
			return null; // 카테고리가 없을 경우 null 값을 반환
		}
	}

	// 음식 카테고리로 쿼리하기
	/*
	 * 들어오는값 : { categoryName : "음식카테고리" } 응답값 : List<Store>
	 */
	@PostMapping("/getFCStore")
	public List<Store> getAllStoreByFc(@RequestBody foodCategory categoryName) {

		// 카테고리 비교에서 아이디 가져오기
		// 만약 입력한 카테고리의 값으로 db의 카테고리 id 체크 이후 없을경우 -1 리턴
		int categoryID = foodCategoryService.getCategoryId(categoryName.getCategoryName());
		if (categoryID != -1) {
			return storeService.getAllStoreByFc(categoryID); // 전체 데이터 반환
		} else {
			return null; // 카테고리가 없을 경우 null 값을 반환
		}
	}

}
