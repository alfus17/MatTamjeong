package com.mat.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.Store;
import com.mat.domain.locationCategory;
import com.mat.domain.userInfo;
import com.mat.service.UserService;
import com.mat.service.locationCategoryService;

@RestController
@RequestMapping("/")
public class UserInfoController 
{
	private HashMap<String, String> AccessKey =new HashMap<>();
	

	@Autowired
	private UserService userService;

	// 모든 유저의 userInfo 데이터를 반환하는 API
	@PostMapping("/getuserInfo")
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
	
	// check 로그인 API
	@GetMapping("/checkUser/{userId}/{password}")
	public ResponseEntity<HashMap<String, String>> checkUserById(@PathVariable("userId") String userId ,@PathVariable("password") String password ) {
		boolean usercheck = userService.checkUser(userId,password);
		if(usercheck) {
			// ToDO 추후에 여기 jwt 변경 작업
			AccessKey.put("token","JonMat");
			return ResponseEntity.ok().body( AccessKey);
		}else {
			
			return ResponseEntity.ok().body(AccessKey);
		}
		
		
	}
	
}


