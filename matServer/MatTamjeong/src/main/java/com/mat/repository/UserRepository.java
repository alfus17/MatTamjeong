package com.mat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.userInfo;

public interface UserRepository extends JpaRepository<userInfo, String> 
{
	List<userInfo> findByUserId(String userId);
}
