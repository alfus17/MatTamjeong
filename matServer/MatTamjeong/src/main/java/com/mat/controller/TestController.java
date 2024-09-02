package com.mat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.TestDomain;
import com.mat.service.testService;
/*
 * 
 *  react랑 연결하기 위한 컨트롤러 예시 입니다.
 *  url/api/test 를 붙여줄경우 response로 테스트입니다가 나옵니다.
 * 
 */
@RestController
@RequestMapping("/api")
public class TestController {
	
	@Autowired
	testService testservice;
	
   @GetMapping("/test")
   public String hello() {
      return "테스트 입니다";
   }
   
   @GetMapping("/menuall")
   public String menuAllList() {
      return testservice.toString();
   }
   
   @PostMapping("/addmenu")
   public TestDomain addMenu(@RequestBody TestDomain test) {
      System.out.println(test);
      return test;
	   }
	
	

}
