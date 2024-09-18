package com.mat.service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.mat.domain.Store;
import com.mat.domain.menu;
import com.mat.repository.menuRepository;

@Service
public class menuService {

	@Autowired
	private menuRepository menuRepository;
	
	public List<menu> getMenu(int storeId){
		List<menu> menuResult = menuRepository.findByStoreId(storeId);
		return menuResult;
	}
	
	// 메뉴 리스트 출력
	public List<menu> getStoreIdByMenuname(String menuName , Pageable pageable){
		HashSet<menu> menuSet = new HashSet<>();
		return menuRepository.findStoreIdByMenuNameContaining(menuName,pageable).getContent();
	}
	

	
}
