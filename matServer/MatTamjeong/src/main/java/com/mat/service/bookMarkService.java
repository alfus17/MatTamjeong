package com.mat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mat.domain.bookmark;
import com.mat.repository.bookMarkRepository;

@Service
public class bookMarkService {

	@Autowired
	private bookMarkRepository bookMarkRepository;
	
	
}
