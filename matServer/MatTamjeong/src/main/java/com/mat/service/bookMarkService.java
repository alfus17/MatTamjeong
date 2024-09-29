package com.mat.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.bookmark;
import com.mat.repository.bookMarkRepository;

@Service
public class bookMarkService {

	@Autowired
	private bookMarkRepository bookMarkRepository;

	// 사용자 북마크 추가
	public boolean addBookMark(bookmark bookmark) {
		boolean addResult = false;
		
		Optional<bookmark> result=bookMarkRepository.findByUserIdAndStoreId(bookmark.getUserId(), bookmark.getStoreId());
		// 만약에 기존의 북마크가 존재하지 않을 경우에는 북마크 새로 추가
		if(!result.isPresent()) {
			try {
				bookmark Resultbookmark = bookMarkRepository.save(bookmark);
				addResult= true;
			} catch (Exception e) {
				System.out.println("bookMarkService_addBookMark : "+ e);
			}
		}
		return addResult;
	}
	
	// 사용자의 북마크 여부 확인 
	public boolean checkBookMark(String userId, String storeId) {
		Optional<bookmark> result=bookMarkRepository.findByUserIdAndStoreId(userId,storeId);
		boolean res = false;
		if(result.isPresent()) {
			System.out.println("bookMarkService_checkBookMark_result : " + result);
			res = true;
		}
		return res;
	}
//	
	// 북마크 삭제하기 
	public boolean deleteBookMark(bookmark bookmark) {
		boolean deleteResult = false;
		int result= bookMarkRepository.deleteStoreByUserIdAndStoreId(bookmark.getUserId(), bookmark.getStoreId());
		System.out.println("deleteBookMark count : " + result);
		// 
		if(result >0) {
			deleteResult = true;
		}
		return deleteResult;
	}
	
	
}
