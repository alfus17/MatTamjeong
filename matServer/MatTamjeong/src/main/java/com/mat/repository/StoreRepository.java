package com.mat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.Store;

public interface StoreRepository extends JpaRepository<Store, Integer> {

	List<Store> findByLocationCategoryId(int locationCategoryId);

	List<Store> findByFoodCategoryId(int foodCategoryId);

}
