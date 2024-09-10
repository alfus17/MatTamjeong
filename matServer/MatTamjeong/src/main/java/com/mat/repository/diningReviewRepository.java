package com.mat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mat.domain.Store;
import com.mat.domain.diningReview;

public interface diningReviewRepository extends JpaRepository<diningReview, Integer>{

	List<diningReview> findByStoreId(Integer StoreId);
	
	@Query("SELECT COALESCE( AVG(m.rating) ,0) FROM DINING_REVIEW m WHERE m.storeId = :storeid")
	double getStoreRating(@Param("storeid") int storeId);

}
