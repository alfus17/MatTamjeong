package com.mat.controller;

import com.mat.domain.Store;
import com.mat.service.StoreService;
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

    // 모든 Store 데이터를 반환하는 API
    @GetMapping("/getStore")
    public List<Store> getAllStores() {
        return storeService.getAllStores();  // 전체 데이터를 반환
    }
    
    // 지역카테고리로 쿼리하기
	/*
	 *  들어오는값 : { locationCategory : "지역카테고리" }
	 * 
	 * 	응답값 :	List<Store>
	 */
    @PostMapping("/getLCStore")
    public List<Store> getAllStoreByLc(@RequestBody String locationCategory) {
        return storeService.getAllStoreByLc(locationCategory);  // 전체 데이터를 반환
    }
    
    // 음식 카테고리로 쿼리하기
	/*
	 *  들어오는값 :  { foodCategory : "음식카테고리" }
	 * 
	 * 	응답값 :	List<Store>
	 */
    @PostMapping("/getFCStore")
    public List<Store> getAllStoreByFc(@RequestBody String foodCategory) {
        return storeService.getAllStoreByFc(foodCategory);  // 전체 데이터를 반환
    }
    

    // 필요한 경우 특정 필드만 반환하는 DTO를 사용할 수 있습니다.
}
