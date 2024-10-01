package com.mat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mat.domain.bookmark;
import com.mat.domain.diningReview;

import jakarta.transaction.Transactional;

public interface bookMarkRepository extends JpaRepository<bookmark, Integer>{

	Optional<bookmark> findByUserIdAndStoreId(String userId, String storeId);

	@Modifying
	@Transactional
	@Query("DELETE FROM BOOKMARK b WHERE b.userId = :userId AND b.storeId = :storeId")
	int deleteStoreByUserIdAndStoreId(@Param("userId") String userId, @Param("storeId") String storeId);

}
