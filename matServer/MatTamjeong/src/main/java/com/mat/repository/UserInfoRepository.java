package com.mat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.userInfo;

public interface UserInfoRepository extends JpaRepository<userInfo, Long> 
{
	Optional<userInfo> findByUserId(String userId);

	Optional<userInfo> findByUserIdAndUserPwd(String userId, String userPwd);


}
