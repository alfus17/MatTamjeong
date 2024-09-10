package com.mat.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.menu;

public interface menuRepository extends JpaRepository<menu, Integer> {

	List<menu> findByStoreId(int storeId);

}
