package com.mat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.bookmark;
import com.mat.domain.diningReview;

public interface bookMarkRepository extends JpaRepository<bookmark, String>{

}
