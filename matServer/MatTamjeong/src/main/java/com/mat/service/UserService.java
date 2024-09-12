package com.mat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.mat.domain.userInfo;
import com.mat.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 특정 유저의 userInfo 데이터를 가져오는 메소드
    public Optional<userInfo> getUserInfoById(String userId) {
        return userRepository.findById(userId);
    }

    // 유저 정보를 업데이트하는 메소드
    public boolean updateUserInfo(String userId, String field, String newValue) {
        Optional<userInfo> userOptional = userRepository.findById(userId);
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

            userRepository.save(user);
            return true;
        }
        return false;
    }
}
