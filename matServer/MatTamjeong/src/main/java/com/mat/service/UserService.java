package com.mat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.Store;
import com.mat.domain.userInfo;
import com.mat.repository.UserInfoRepository;

@Service
public class UserService 
{
	@Autowired
	private UserInfoRepository userInfoRepository;
	
	// 모든 userInfo 데이터를 가져오는 메소드
	public List<userInfo> getAlluserInfos() 
	{
		return userInfoRepository.findAll();
	}
	
	// 특정 유저의 userInfo 데이터를 가져오는 메소드
	public Optional<userInfo> getUserInfoById(String userId) 
	{
		return userInfoRepository.findByUserId(userId);
	}
	
	// 유저아이디와 비밀번호로 체크
	public boolean checkUser(String userId, String userPwd) {
		
		boolean result= false;
		
		// TODO 변경
		Optional<userInfo>user = userInfoRepository.findByUserIdAndUserPwd(userId, userPwd);
		
		if(user.isPresent()) {
			result = !result;
		}
		return result;
	}
	
	// 유저아이디로 유저가 있는지 체크
	// 유저아이디가 존재하면 true 아니면 false
	public boolean checkUser(String userId) {
		boolean result= false;
		Optional<userInfo>user = userInfoRepository.findByUserId(userId);
		
		if(user.isPresent()) {
			result = !result;
		}
		return result;
	}
	
	
	// 회원가입 메소드
	public boolean saveUser(userInfo user) {
		userInfo userResult = userInfoRepository.save(user);
		boolean result = false;
		
		// 잘 저장되었는지 확인
		if(userResult.getUserId() != null) {
			result = !result;
		}
		return result;
	}
	
	
	// 유저 정보를 업데이트하는 메소드
    public boolean updateUserInfo(String userId, String field, String newValue) {
        Optional<userInfo> userOptional = userInfoRepository.findByUserId(userId);
        
        boolean UserInfoUpdate = false;
        
        if (userOptional.isPresent()) {
            userInfo user = userOptional.get();

            switch (field) {
                case "nickName":
                    user.setNickName(newValue);
                    break;
                case "email":
                    user.setEmail(newValue);
                    break;
                case "password":
                    // 비밀번호 업데이트 로직 (암호화 등 필요)
                    break;
                default:
                    return false;
            }
            
            try {
                // 저장 시 예외가 발생하지 않으면 성공으로 간주
                userInfoRepository.save(user);
                UserInfoUpdate = true;  // 성공 시 true로 설정
            } catch (Exception e) {
                // 예외 발생 시 false 반환
                System.err.println("유저 정보 업데이트 중 오류 발생 : " + e.getMessage());
            }
       
        }
        return UserInfoUpdate;
    }
	
}
