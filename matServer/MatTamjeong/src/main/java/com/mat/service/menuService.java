package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
}
