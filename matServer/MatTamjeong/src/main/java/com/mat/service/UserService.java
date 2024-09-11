package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.Store;
import com.mat.domain.userInfo;
import com.mat.repository.UserRepository;

@Service
public class UserService 
{
	@Autowired
	private UserRepository userRepository;
	
//	@Autowi
	
	// 모든 userInfo 데이터를 가져오는 메소드
	public List<userInfo> getAlluserInfos() 
	{
		return userRepository.findAll();
	}
	
	// 특정 유저의 userInfo 데이터를 가져오는 메소드
	public Optional<userInfo> getUserInfoById(String userId) 
	{
		return userRepository.findById(userId);
	}
	
}
