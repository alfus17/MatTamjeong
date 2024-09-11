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
	
	
	// 가게이름 , 주소, 메뉴이름 검색 이후 set 에 모두 모아서 리턴 최대 10개
	@GetMapping("/query={keword},{page}")
	public List<Store> findStoresWithKeywords (String name, int page, String keyword){


		return null;
	}
	
	
	
	

}
