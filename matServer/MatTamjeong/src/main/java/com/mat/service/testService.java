package com.mat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.repository.test;

/*
 * 테스트를 위한 서비스입니다.
 * 테스트를 위해 임이로 설정해주었습니다.
 * 
 */

@Service
public class testService {

	@Autowired
	test testRepo;
	
}
