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
		return userInfoRepository.findById(userId);
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
	
	// 유저 정보를 업데이트하는 메소드
    public boolean updateUserInfo(String userId, String field, String newValue) {
        Optional<userInfo> userOptional = userInfoRepository.findById(userId);
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

            userInfoRepository.save(user);
            return true;
        }
        return false;
    }
	
}
