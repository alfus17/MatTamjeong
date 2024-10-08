package com.mat.controller;

import java.util.ArrayList;
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

import com.mat.common.ObjectToMapConverter;
import com.mat.domain.Store;
import com.mat.domain.bookmark;
import com.mat.domain.locationCategory;
import com.mat.domain.matReview;
import com.mat.domain.userInfo;
import com.mat.service.StoreService;
import com.mat.service.UserService;
import com.mat.service.bookMarkService;
import com.mat.service.locationCategoryService;
import com.mat.service.matReviewService;

@RestController
@RequestMapping("/user")
public class UserInfoController 
{
	private HashMap<String, String> AccessKey =new HashMap<>();
	
	@Autowired
	private matReviewService matReviewService;

	@Autowired
	private UserService userService;
	
	@Autowired
	private bookMarkService bookMarkService;
	
	@Autowired
	private StoreService storeService;

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
		// 만약 db에 존재하지 않을경우 유저 회원가입 진행 이메일도 체크
		if(! userService.checkUser(user.getUserId())&& !userService.checkUserByEmail(user.getEmail())) {
			userService.saveUser(user);
			response = true;
		}
		
		return response;
	}
	
	// 유저 아이디 중복 체크  
	@PostMapping("/userIdCheck")
	public boolean userIdCheck(@RequestBody userInfo user) {
		// true면 존재함 false 면 존재하지않음 
		System.out.println("userIdCheck : " + user);
		return userService.checkUser(user.getUserId());
	}
	

	// 사용자의 아이디 찾기 
	@PostMapping("/findUserId")
	public String findUserId(@RequestBody userInfo user) {
		String userId = "";
		String userName = user.getUserName();
		String userEmail = user.getEmail();
		System.out.println("userName : " + userName);
		System.out.println("userEmail : "+userEmail);
		if(userName != "" && userEmail != "") {
			userId = userService.getUserIdById(userName,userEmail);
		}
		
		return userId;
	}


	// 사용자의 비밀번호 찾기 
	//사용자 이름과 아이디를 받아서 비밀번호를 반환해준다.
	@PostMapping("/findUserPwd")
	public String findUserPwd(@RequestBody userInfo user) {
		String userPwd = "";
		String userId = user.getUserId();
		String userName = user.getUserName();
		System.out.println("userId : " + userId);
		System.out.println("userName : "+userName);
		if(userName != "" && userId != "") {
			userId = userService.getPwdById(userId,userName);
		}
		
		return userId;
	}
	

	// 특정 유저의 userInfo 데이터를 반환하는 API
	@GetMapping("/getuserInfo/{userId}")
	public userInfo getUserInfoById(@PathVariable("userId") String userId) 
	{
		return userService.getUserInfoById(userId).get(); // 특정 유저의 데이터를 반환
	}
	
	// check 로그인 API
	@GetMapping("/checkUser/{userId}/{password}")
	public ResponseEntity<Object> checkUserById(@PathVariable("userId") String userId ,@PathVariable("password") String password ) {
		System.out.println("here userId : " + userId);
		System.out.println("here  password : " + password);
		Optional <userInfo>usercheck = userService.checkUser(userId,password);
		
		if(usercheck.isPresent()) {
			usercheck.get().setAuth("JonMat");
			// ToDO 추후에 여기 jwt 변경 작업
			return ResponseEntity.ok().body(usercheck.get());
		}else {
			return ResponseEntity.ok().body("noUser");
		}
			
		
	}
	
	// id 존재여부 체크
	// true 면 존재함 false 면 존재하지 않음
	@GetMapping("/checkUser/{userId}")
	public boolean  checkUserId(@PathVariable("userId") String userId  ) {
		return userService.checkUser(userId);
	}
	
//	 사용자 북마크 추가
	@PostMapping("/addBookMark")
	public boolean addBookMark(@RequestBody bookmark bookmark) {
		
		// 유저 아이디로 유저가 있는지 확인하기 
		// true 면 존재함 false 면 존재하지 않음
		boolean userCheck = userService.checkUser(bookmark.getUserId()); 
		boolean addResult= false;
		
		if(userCheck) {
			
			addResult= bookMarkService.addBookMark(bookmark);
		}
		
		return addResult;
	}
	
//	 사용자 북마크 삭제
	@PostMapping("/deleteBookMark")
	public boolean deleteBookMark(@RequestBody bookmark bookmark) {
		
		// 유저 아이디로 유저가 있는지 확인하기 
		// true 면 존재함 false 면 존재하지 않음
		boolean userCheck = userService.checkUser(bookmark.getUserId()); 
		boolean addResult= false;
		
		if(userCheck) {
			
			addResult= bookMarkService.deleteBookMark(bookmark);
		}
		
		return addResult;
	}
	
	@PostMapping("/checkBookMark")
	public boolean checkBookMark(@RequestBody bookmark bookmark) {
		
		// 유저 아이디로 유저가 있는지 확인하기 
		// true 면 존재함 false 면 존재하지 않음
		boolean userCheck = userService.checkUser(bookmark.getUserId()); 
		boolean addResult= false;
		
		if(userCheck) {
			
			addResult= bookMarkService.checkBookMark(bookmark.getUserId(), bookmark.getStoreId());
			System.out.println("checkBookMark : "+addResult);
		}
		
		return addResult;
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
    
	// 내가 작성한 리뷰 리스트 가져오기 
    @GetMapping("/getMyReviews/{userId}")
    public Object  getMyReviews(@PathVariable("userId") String userId  ) {
    	Object result = null;
    	
    	if(userService.checkUser(userId)) {
    		List<Object> ReviewList = new ArrayList<>();
    		
    		for(matReview review : matReviewService.getReviewsByUserId(userId) ) {
    			// 이걸로 객체를 Map으로 변경 
    			HashMap<String, Object> reviewMap=new ObjectToMapConverter().convertObjectToMap(review);
    			
    			// store id로 storeName 검색
    			Optional<Store> store = storeService.getStoreById(review.getStoreId());
    			if(store.isPresent()) {
    				reviewMap.put("storeName", store.get().getStoreName());  
    			}
    			ReviewList.add(reviewMap);
    			System.out.println("ReviewList : " +ReviewList);
    		}
    		result =ReviewList;
    		
    		System.out.println("result : " +result.toString());
    		
    		
    	}else {
    		result = "";
    	}
		return result;
	}
	

	
}


