package com.mat.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.Store;
import com.mat.domain.locationCategory;
import com.mat.domain.userInfo;
import com.mat.domain.users;
import com.mat.service.UserService;
import com.mat.service.locationCategoryService;

@RestController
public class UserInfoController 
{
	
	@Autowired
	private UserService userService;

	// 모든 유저의 userInfo 데이터를 반환하는 API
	@GetMapping("/getuserInfo")
	public List<userInfo> getAlluserInfos() 
	{
		return userService.getAlluserInfos(); // 전체 데이터를 반환
	}
	
	// 특정 유저의 userInfo 데이터를 반환하는 API
	@GetMapping("/getuserInfo/{userId}")
	public Optional<userInfo> getUserInfoById(@PathVariable("userId") String userId) 
	{
		return userService.getUserInfoById(userId); // 특정 유저의 데이터를 반환
	}
	
}


