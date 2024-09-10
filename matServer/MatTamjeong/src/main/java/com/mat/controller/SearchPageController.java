package com.mat.controller;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.Store;
import com.mat.service.StoreService;

@RestController
@RequestMapping("/Search")
public class SearchPageController {
	
	// 가게 
	@Autowired
	private StoreService StoreService;
	
	
	// 가게이름 , 메뉴 , 지역태그, 음식태그 검색 이후 set 에 모두 모아서 리턴 
	@PostMapping("/")
	public List<Object> findStoresWithKeywords (@RequestBody String keyword){
		
		
		// TODO
//		Set<Store> stores = new HashSet<>();
//		
//		stores.add();
//		
			
		return null;
	}
	
	
	
	

}
