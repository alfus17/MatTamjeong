package com.mat.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.Store;
import com.mat.domain.menu;
import com.mat.service.StoreService;
import com.mat.service.menuService;

@RestController
@RequestMapping("/search")
public class SearchPageController {

	// 가게
	@Autowired
	private StoreService StoreService;

	@Autowired
	private menuService MenuService;

	// 가게이름 , 주소, 메뉴이름 검색 이후 set 에 모두 모아서 리턴 최대 10개

	// 가게 주소중에 해당 키워드가 있을 경우 해당 가게들 리턴 페이지네이션 사용 ( 가나다순으로 정렬)
	@GetMapping("location/{Address}/{page}")
	public List<Store> findStoresByAddress(@PathVariable("Address") String Address, @PathVariable("page") String page) {
		int intPage = Integer.parseInt(page);
		// 정렬 기준
		Sort sort = Sort.by(Sort.Order.asc("storeName"));
		Pageable pageable = PageRequest.of(intPage - 1, 10, sort);

		return StoreService.getAllStoreByAddress(Address, pageable).getContent();
	}

	// 가게 이름중 해당 키워드가 있을 경우 해당 가게들 리턴 페이지네이션 적용 ( 가나다순으로 정렬)
	@GetMapping("store/{storeName}/{page}")
	public List<Store> findStoresByStoreName(@PathVariable("storeName") String storeName,
			@PathVariable("page") String page) {
		int intPage = Integer.parseInt(page);
		// 정렬 기준
		Sort sort = Sort.by(Sort.Order.asc("storeName"));
		Pageable pageable = PageRequest.of(intPage - 1, 10, sort);
		return StoreService.getAllStoreByStoreName(storeName, pageable).getContent();
	}

	// 메뉴중에 해당 키워드가 있을경우 가게들 리턴 페이지네이션 적용 ( 가나다순으로 정렬)
	@GetMapping("menu/{menuName}/{page}")
	public List<Store> findStoresByMenu(@PathVariable("menuName") String menuName, @PathVariable("page") String page) {
		int intPage = Integer.parseInt(page);
		// 정렬 기준
		Sort sort = Sort.by(Sort.Order.asc("store_Name"));
		Pageable pageable = PageRequest.of(intPage - 1, 10, sort);
		List<Store> response = StoreService.getStoreByMenuName(menuName, pageable);

		return response;
	}

}
