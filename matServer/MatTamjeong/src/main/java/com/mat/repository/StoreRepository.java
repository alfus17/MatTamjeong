package com.mat.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mat.domain.Store;

public interface StoreRepository extends JpaRepository<Store, Integer> {

	List<Store> findByLocationCategoryId(int locationCategoryId);

	List<Store> findByFoodCategoryId(int foodCategoryId);

	Page<Store> findByStoreAddressContaining(String address, Pageable pageable);

	Page<Store> findByStoreNameContaining(String storeName, Pageable pageable);

    @Query(value = "SELECT * FROM STORE WHERE store_id IN (SELECT DISTINCT store_id FROM MENU WHERE menu_name LIKE %:menuName%)",nativeQuery = true)
	Slice<Store> findStoresByMenuName(@Param("menuName")String menuName, Pageable pageable);

}
