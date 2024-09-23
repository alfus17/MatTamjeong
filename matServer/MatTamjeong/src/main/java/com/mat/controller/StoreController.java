package com.mat.controller;

import com.mat.common.ObjectToMapConverter;
import com.mat.common.ratings;
import com.mat.domain.Store;
import com.mat.domain.diningReview;
import com.mat.domain.locationCategory;
import com.mat.domain.matReview;
import com.mat.domain.foodCategory;
import com.mat.domain.kakaoReview;
import com.mat.service.StoreService;
import com.mat.service.dcReviewService;
import com.mat.service.foodCategoryService;
import com.mat.service.kgReviewService;
import com.mat.service.locationCategoryService;
import com.mat.service.matReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
	
	//다이닝 코드
	@Autowired
	private dcReviewService dcReviewService;
	
	// 카카오
	@Autowired
    private kgReviewService kgReviewService;

	// 맛탐정
    @Autowired
    private matReviewService matReviewService;
    

	// 모든 Store 데이터를 반환하는 API
	@GetMapping("/getStore")
	public List<Store> getAllStores() {
		return storeService.getAllStores(); // 전체 데이터를 반환
	}
	
	// 모든 지역 카테고리 쿼리하기
	@GetMapping("/getLCList")
	public List<locationCategory> getLCList(){
		return locationCategoryService.getLCList();
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
	
	// 페이지 네이션 처리 
	// 지역카테고리로 쿼리하기
	@PostMapping("/getLCStore/{page}")
	public Map<String, Object>getAllStoreByLc(@RequestBody locationCategory categoryName, @PathVariable("page") String page ) {
		int intPage = Integer.parseInt(page);
		// 최종 반환 맵
		Map <String, Object> result = new HashMap<>();

		Sort sort = Sort.by(Sort.Order.asc("storeName"));
		Pageable pageable = PageRequest.of(intPage - 1, 10, sort);
		// 카테고리 비교에서 아이디 가져오기
		// 만약 입력한 카테고리의 값으로 db의 카테고리 id 체크 이후 없을경우 -1 리턴
		int categoryID = locationCategoryService.getCategoryId(categoryName.getCategoryName());
		
		if (categoryID != -1) {
			Page<Store> Pagestore = storeService.getAllStoreByLc(categoryID , pageable);
			long totalElements =  Pagestore.getTotalElements();
			int totalPages = Pagestore.getTotalPages();
			
			// 리뷰 해쉬맵
			HashMap<String, Object> reviewsMap = null;
			// 스토어 리스트
			List<Object> storeList = new ArrayList<>();
			
			
			// 별점 담는 작업
			for(Store store : Pagestore.getContent()) {
				reviewsMap = new ObjectToMapConverter().convertObjectToMap(store);
//				System.out.println("type : "+map.get("storeId").getClass().getName());   
//				HashMap<String,Object> reviewsMap = new HashMap<>();
		    	//Page<Object> 형식이라서 .getContent 해줘야함
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
//				result.put("storeList",reviewsMap);
				storeList.add(reviewsMap);
				System.out.println("storeList : " + storeList);
				
			}
			
			// storeList 넣기
			result.put("storeList", storeList);
			// 총 쿼리 갯수 
			result.put("totalElements", totalElements);
			// 총 페이지 갯수 
			result.put("totalPages", totalPages);
			
//			ratings ratings = new ratings(); 
//			Map<String, Double> StoreRatings =ratings.getRatings();
			
			System.out.println("totalElements : " + totalElements   );
			System.out.println("totalPages : " + totalPages);
			
			return result;

		} else {
			return result; // 카테고리가 없을 경우 null 값을 반환
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
