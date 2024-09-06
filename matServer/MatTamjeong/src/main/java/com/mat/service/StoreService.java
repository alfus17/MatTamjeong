package com.mat.service;

import com.mat.domain.Store;
import com.mat.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StoreService {

    @Autowired
    private StoreRepository storeRepository;

    // 모든 Store 데이터를 가져오는 메서드
    public List<Store> getAllStores() {
        return storeRepository.findAll();
    }

    // 특정 ID의 Store 데이터를 가져오는 메서드
    public Optional<Store> getStoreById(String storeId) {
        return storeRepository.findById(storeId);
    }

    // Store 데이터를 저장하는 메서드
    public Store saveStore(Store store) {
        return storeRepository.save(store);
    }

    // Store 데이터를 삭제하는 메서드
    public void deleteStoreById(String storeId) {
        storeRepository.deleteById(storeId);
    }
    
}
