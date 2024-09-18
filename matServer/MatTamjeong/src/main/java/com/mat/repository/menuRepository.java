package com.mat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.mat.domain.Store;
import com.mat.domain.menu;

public interface menuRepository extends JpaRepository<menu, Integer> {

	List<menu> findByStoreId(int storeId);

	Page<menu> findStoreIdByMenuNameContaining(String menuName, Pageable pageable);
	
	
}
