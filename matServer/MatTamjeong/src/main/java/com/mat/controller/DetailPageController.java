package com.mat.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.Store;
import com.mat.domain.matReview;
import com.mat.domain.menu;
import com.mat.service.StoreService;
import com.mat.service.dcReviewService;
import com.mat.service.kgReviewService;
import com.mat.service.matReviewService;
import com.mat.service.menuService;

@RestController
@RequestMapping("/DetailPage")
public class DetailPageController {

    @Autowired
    private dcReviewService dcReviewService;
    
    @Autowired
    private kgReviewService kgReviewService;

    @Autowired
    private matReviewService matReviewService;
    
    @Autowired
    private StoreService storeService;
    
    @Autowired
    private menuService menuService;
    
	/*
	 * 필요값 : {"storeId": 스토어아이디값(int)}
	 *  
	 * ex) 응답값
	 * {
    "MatReivews": [
        {
            "matReviewId": 1,
            "rating": 4.8,
            "matLikeCount": 45,
            "matReviewContent": "새로운 메뉴가 정말 맛있었어요! 특히 스시의 신선함이 최고였어요.",
            "matCreatedTime": null,
            "matPhotoUrl": null,
            "storeId": 1
        }...
    ],
    "StoreMenu": [
        {
            "menuId": 1,
            "menuName": "자장면",
            "storeId": 1,
            "foodCategory": "중식",
            "price": 30000,
            "imageUrl": null
        }...
    ],
    "StoreInfo": {
        "storeId": 1,
        "storeName": "Sushi Myeongdong",
        "storeAddress": "서울특별시 중구 명동길 14",
        "storeLocationLat": 37.5642135,
        "storeLocationLng": 126.9826842,
        "businessHours": "09:00 AM - 08:00 PM",
        "details": null,
        "foodCategoryId": 1,
        "locationCategoryId": 1,
        "createdAt": null,
        "updateAt": null								
    },
    "Ratings": {
        "kgRating": 4.5,								// 카카오 평점 평균
        "dcRating": 0.0,								// 다이닝코드 평점 평균
        "avgRating": 3.1,								// 모든 평점 평균
        "matRating": 4.8								// 맛탐정 평점 평균
    }
}
	 */

    @PostMapping("/getDetailStore")
    public HashMap<String, Object> getStoreAllInformation(@RequestBody Store store) {
        HashMap<String, Object> response = new HashMap<>();

        // 가게 데이터 ( StoreInfo )
        Optional<Store> storeOptional = storeService.getStoreById(store.getStoreId());
        if (storeOptional.isPresent()) {
            response.put("StoreInfo", storeOptional.get());
        } else {
            response.put("error", "Store not found");
            return response;
        }

        // 별점 데이터 (storeRating)
        HashMap<String, Double> storeRatings = new HashMap<>();
        
        double dcStoreRating = dcReviewService.getStoreRating(store.getStoreId());
        double kgStoreRating = kgReviewService.getStoreRating(store.getStoreId());
        double matStoreRating = matReviewService.getStoreRating(store.getStoreId());
        double avgAllRating = (dcStoreRating + kgStoreRating + matStoreRating) / 3.0;

        storeRatings.put("dcRating", dcStoreRating);
        storeRatings.put("kgRating", kgStoreRating);
        storeRatings.put("matRating", matStoreRating);
        storeRatings.put("avgRating", avgAllRating);

        response.put("Ratings", storeRatings);

        // 맛탐정 리뷰 데이터
        List<matReview> matReviews = matReviewService.getMatReviewsByStoreId(store.getStoreId());
        response.put("MatReviews", matReviews);

        // 메뉴 데이터
        List<menu> menuResult = menuService.getMenu(store.getStoreId());
        response.put("StoreMenu", menuResult);

        return response;
    }
}
