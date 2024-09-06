package com.mat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mat.domain.Store;

public interface StoreRepository extends JpaRepository<Store, Long> {

}
