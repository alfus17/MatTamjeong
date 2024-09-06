package com.mat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.Store;

public interface StoreRepository extends JpaRepository<Store, Long> {

	List<Store> findByLocationCategory(String location);

	List<Store> findByFoodCategory(String foodCategory);

	List<Store> findByLocationCategoryContaining(String locationCategory);

	List<Store> findByFoodCategoryContaining(String foodCategory);

}
