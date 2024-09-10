package com.mat.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.Store;
import com.mat.domain.diningReview;

public interface diningReviewRepository extends JpaRepository<diningReview, Integer>{

	Optional<diningReview> findByStoreId(Integer StoreId);

}
