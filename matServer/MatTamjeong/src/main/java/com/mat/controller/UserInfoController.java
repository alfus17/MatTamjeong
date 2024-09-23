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
import com.mat.service.bookMarkService;
import com.mat.service.locationCategoryService;

@RestController
@RequestMapping("/user")
public class UserInfoController 
{
	private HashMap<String, String> AccessKey =new HashMap<>();
	

	@Autowired
	private UserService userService;
	
	@Autowired
	private bookMarkService bookMarkService;

	// 모든 유저의 userInfo 데이터를 반환하는 API
	@PostMapping("/getuserInfo")
	public List<userInfo> getAlluserInfos() 
	{
		return userService.getAlluserInfos(); // 전체 데이터를 반환
	}
	
	// 회원가입 
	@PostMapping("/enrollUser")
	public boolean enrollUser(@RequestBody userInfo user) {
		boolean response = false;
		// 만약 db에 존재하지 않을경우 유저 회원가입 진행 
		if(! userService.checkUser(user.getUserId())) {
			userService.saveUser(user);
			response = true;
		}
		return response;
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
	
	// id 존재여부 체크
	// true 면 존재함 false 면 존재하지 않음
	@GetMapping("/checkUser/{userId}")
	public boolean  checkUserId(@PathVariable("userId") String userId  ) {
		return userService.checkUser(userId);
	}
	
	// 사용자 북마크 정보 입력
	@GetMapping("/addBookMark/{userId}")
	public boolean addBookMark(@PathVariable("userId") String userId  ) {
		
		// 유저 아이디로 유저가 있는지 확인하기 
		// true 면 존재함 false 면 존재하지 않음
		boolean userCheck = userService.checkUser(userId); 
		
		if(userCheck) {
			
			bookMarkService.addBookMark(userId);
		}
		
		return false;
	}
	
	
	
	// 사용자 정보를 업데이트하는 API
    @PostMapping("/updateUserInfo")
    public ResponseEntity<Map<String, Object>> updateUserInfo(@RequestBody Map<String, String> payload) {
        String userId = payload.get("userId");
        String field = payload.get("field");
        String newValue = payload.get("value");

        Map<String, Object> response = new HashMap<>();

        try {
            // 업데이트 시도
            boolean success = userService.updateUserInfo(userId, field, newValue);

            if (success) {
                response.put("success", true);
                response.put("message", "유저 정보 업데이트 성공");
                return ResponseEntity.ok().body(response); // 성공 시 OK 응답 반환
            } else {
                response.put("success", false);
                response.put("message", "유저 정보 업데이트 실패");
                return ResponseEntity.badRequest().body(response); // 실패 시 Bad Request 응답 반환
            }
        } catch (Exception e) {
            // 예외가 발생하면 실패로 처리하고 에러 메시지를 반환
            response.put("success", false);
            response.put("message", "유저 정보 업데이트 중 오류 발생 : " + e.getMessage());
            return ResponseEntity.status(500).body(response); // 서버 오류 시 500 응답 반환
        }
    }
	
	

	
}


