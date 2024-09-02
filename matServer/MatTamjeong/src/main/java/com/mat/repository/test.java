package com.mat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mat.domain.TestDomain;
/*
 * 테스트 하기 위한 레포지토리입니다
 * 테스트를 위해 임의로 만들었습니다. 
 * 
 */

@Repository
public interface test extends JpaRepository<TestDomain, String> {

}
