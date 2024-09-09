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
	
	
	// 
	@PostMapping("/")
	public List<Object> findStoresWithKeywords (@RequestBody String keyword){
		
		Set<Store> stores = new HashSet<>();
		
		stores.add();
		
			
		return null;
	}
	
	
	
	

}
