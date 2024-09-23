package com.mat.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

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

import com.mat.common.ObjectToMapConverter;
import com.mat.domain.Store;
import com.mat.domain.menu;
import com.mat.service.StoreService;
import com.mat.service.dcReviewService;
import com.mat.service.kgReviewService;
import com.mat.service.matReviewService;
import com.mat.service.menuService;

@RestController
@RequestMapping("/search")
public class SearchPageController {

	// 가게
	@Autowired
	private StoreService StoreService;

	@Autowired
	private menuService MenuService;
	
	//다이닝 코드
	@Autowired
	private dcReviewService dcReviewService;
	
	// 카카오
	@Autowired
    private kgReviewService kgReviewService;

	// 맛탐정
    @Autowired
    private matReviewService matReviewService;
    


	// 가게이름 , 주소, 메뉴이름 검색 이후 set 에 모두 모아서 리턴 최대 10개

	// 가게 주소중에 해당 키워드가 있을 경우 해당 가게들 리턴 페이지네이션 사용 ( 가나다순으로 정렬)
	@GetMapping("location/{Address}/{page}")
	public Map<String, Object> findStoresByAddress(@PathVariable("Address") String Address, @PathVariable("page") String page) {
		int intPage = Integer.parseInt(page);
		// 정렬 기준
		// 페이징 처리 필요한 값들
		Sort sort = Sort.by(Sort.Order.asc("storeName"));
		Pageable pageable = PageRequest.of(intPage - 1, 10, sort);
		
		// 총 리턴해줄 결과값 맵
		Map <String, Object> result = new HashMap<>();
		
		// 페이징 처리 결과 데이터
		Page<Store> StoreResult = StoreService.getAllStoreByAddress(Address, pageable);
		
		// 같이 리턴해줄 값들
		long totalElements =  StoreResult.getTotalElements();
		int totalPages = StoreResult.getTotalPages();
		
		// store 페이징으로 처리해준 값 
		List<Store> resultList = StoreResult.getContent();
		
		// 리뷰 리스트 해쉬맵
		List<Object> storeList =  new ArrayList<>();
		// 리뷰 해쉬맵
		HashMap<String, Object> reviewsMap = new HashMap<>();
		
		for(Store store : resultList) {
			reviewsMap  = new ObjectToMapConverter().convertObjectToMap(store);
			// 다이닝 코드 별점
			double dcStoreRating = dcReviewService.getStoreRating(store.getStoreId());
			// 카카오 별점
			double kgStoreRating = kgReviewService.getStoreRating(store.getStoreId());
			// 맛탐정 별점
			double matStoreRating = matReviewService.getStoreRating(store.getStoreId());
			// 평균 별점
			double avgAllRating = (dcStoreRating+kgStoreRating+matStoreRating)/3.0;
			System.out.println("reviewsMap1 : " + reviewsMap);
			// 데이터 해쉬맵에 넣어줌
			reviewsMap.put("dcRating", dcStoreRating);
			reviewsMap.put("kgRating", kgStoreRating);
			reviewsMap.put("matRating", matStoreRating);
			reviewsMap.put("avgRating", avgAllRating);
			// 리턴값을 출력하는 해쉬맵에 store hashmap 넣기
//			result.put("storeList",reviewsMap);
			storeList.add(reviewsMap);
			System.out.println("storeList : " + storeList);
		 
		 }
		// storeList 넣기
		result.put("storeList", storeList);
		// 총 쿼리 갯수 
		result.put("totalElements", totalElements);
		// 총 페이지 갯수 
		result.put("totalPages", totalPages);
		 
		return result;
	}

	// 가게 이름중 해당 키워드가 있을 경우 해당 가게들 리턴 페이지네이션 적용 ( 가나다순으로 정렬)
	@GetMapping("store/{storeName}/{page}")
	public Map<String, Object> findStoresByStoreName(@PathVariable("storeName") String storeName,
			@PathVariable("page") String page) {
		int intPage = Integer.parseInt(page);
		// 정렬 기준
		Sort sort = Sort.by(Sort.Order.asc("storeName"));
		Pageable pageable = PageRequest.of(intPage - 1, 10, sort);
		
		// 총 리턴해줄 결과값 맵
		Map <String, Object> result = new HashMap<>();
		
		// 페이징 처리 결과 데이터
		Page<Store> StoreResult = StoreService.getAllStoreByStoreName(storeName, pageable);
		
		// 같이 리턴해줄 값들
		long totalElements =  StoreResult.getTotalElements();
		int totalPages = StoreResult.getTotalPages();
		
		// store 페이징으로 처리해준 값 
		List<Store> resultList = StoreResult.getContent();
		
		// 리뷰 리스트 해쉬맵
		List<Object> storeList =  new ArrayList<>();
		// 리뷰 해쉬맵
		HashMap<String, Object> reviewsMap = new HashMap<>();
		
		for(Store store : resultList) {
			reviewsMap  = new ObjectToMapConverter().convertObjectToMap(store);
			// 다이닝 코드 별점
			double dcStoreRating = dcReviewService.getStoreRating(store.getStoreId());
			// 카카오 별점
			double kgStoreRating = kgReviewService.getStoreRating(store.getStoreId());
			// 맛탐정 별점
			double matStoreRating = matReviewService.getStoreRating(store.getStoreId());
			// 평균 별점
			double avgAllRating = (dcStoreRating+kgStoreRating+matStoreRating)/3.0;
			System.out.println("reviewsMap1 : " + reviewsMap);
			// 데이터 해쉬맵에 넣어줌
			reviewsMap.put("dcRating", dcStoreRating);
			reviewsMap.put("kgRating", kgStoreRating);
			reviewsMap.put("matRating", matStoreRating);
			reviewsMap.put("avgRating", avgAllRating);
			// 리턴값을 출력하는 해쉬맵에 store hashmap 넣기
//			result.put("storeList",reviewsMap);
			storeList.add(reviewsMap);
			System.out.println("storeList : " + storeList);
		 
		 }
		// storeList 넣기
		result.put("storeList", storeList);
		// 총 쿼리 갯수 
		result.put("totalElements", totalElements);
		// 총 페이지 갯수 
		result.put("totalPages", totalPages);
		 
		return result;

	}

	// 메뉴중에 해당 키워드가 있을경우 가게들 리턴 페이지네이션 적용 ( 가나다순으로 정렬)
	@GetMapping("menu/{menuName}/{page}")
	public Map<String, Object>  findStoresByMenu(@PathVariable("menuName") String menuName, @PathVariable("page") String page) {
		
		int intPage = Integer.parseInt(page);
		// 정렬 기준
		Sort sort = Sort.by(Sort.Order.asc("store_Name"));
		Pageable pageable = PageRequest.of(intPage - 1, 10, sort);
		
		// 총 리턴해줄 결과값 맵
		Map <String, Object> result = new HashMap<>();
		
		// 페이징 처리 결과 데이터
		Page<Store> StoreResult = StoreService.getStoreByMenuName(menuName, pageable);
		
		// 같이 리턴해줄 값들
		long totalElements =  StoreResult.getTotalElements();
		int totalPages = StoreResult.getTotalPages();
		
		// store 페이징으로 처리해준 값 
		List<Store> resultList = StoreResult.getContent();
		
		// 리뷰 리스트 해쉬맵
		List<Object> storeList = new ArrayList<>();
		// 리뷰 해쉬맵
		HashMap<String, Object> reviewsMap = new HashMap<>();
		
		for(Store store : resultList) {
			reviewsMap  = new ObjectToMapConverter().convertObjectToMap(store);
			// 다이닝 코드 별점
			double dcStoreRating = dcReviewService.getStoreRating(store.getStoreId());
			// 카카오 별점
			double kgStoreRating = kgReviewService.getStoreRating(store.getStoreId());
			// 맛탐정 별점
			double matStoreRating = matReviewService.getStoreRating(store.getStoreId());
			// 평균 별점
			double avgAllRating = (dcStoreRating+kgStoreRating+matStoreRating)/3.0;
			System.out.println("reviewsMap1 : " + reviewsMap);
			// 데이터 해쉬맵에 넣어줌
			reviewsMap.put("dcRating", dcStoreRating);
			reviewsMap.put("kgRating", kgStoreRating);
			reviewsMap.put("matRating", matStoreRating);
			reviewsMap.put("avgRating", avgAllRating);
			// 리턴값을 출력하는 해쉬맵에 store hashmap 넣기
//			result.put("storeList",reviewsMap);
			storeList.add(reviewsMap);
			System.out.println("storeList : " + storeList);
		 
		 }
		// storeList 넣기
		result.put("storeList", storeList);
		// 총 쿼리 갯수 
		result.put("totalElements", totalElements);
		// 총 페이지 갯수 
		result.put("totalPages", totalPages);
		 
		return result;

	}

}
