package com.mat.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mat.domain.userInfo;
import com.mat.service.UserService;

@RestController
public class UserInfoController {

    @Autowired
    private UserService userService;

    // 특정 유저의 userInfo 데이터를 반환하는 API
    @GetMapping("/getuserInfo/{userId}")
    public Optional<userInfo> getUserInfoById(@PathVariable("userId") String userId) {
        return userService.getUserInfoById(userId);
    }

    // 사용자 정보를 업데이트하는 API
    @PostMapping("/updateUserInfo")
    public Map<String, Object> updateUserInfo(@RequestBody Map<String, String> payload) {
        String userId = payload.get("userId");
        String field = payload.get("field");
        String newValue = payload.get("value");
        
        boolean success = userService.updateUserInfo(userId, field, newValue);

        Map<String, Object> response = new HashMap<>();
        response.put("success", success);

        return response;
    }
}
