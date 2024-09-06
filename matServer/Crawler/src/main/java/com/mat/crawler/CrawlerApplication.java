package com.mat.crawler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrawlerApplication {

	public static void main(String[] args) {
		CrawlerController cc = new CrawlerController();
		try {
			cc.StoreCrawler();
		} catch (Exception e) {
			e.printStackTrace();
		}
		SpringApplication.run(CrawlerApplication.class, args);
	}

}
