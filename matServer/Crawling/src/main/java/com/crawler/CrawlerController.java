package com.crawler;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CrawlerController implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(CrawlerController.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // WebDriver 설정
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        
        String keyword = "성복역 맛집";

        // Selenium을 이용한 크롤링 작업
        driver.get("https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query="+keyword); // 크롤링할 URL 입력
        String pageTitle = driver.getTitle();
        System.out.println("Page title is: " + pageTitle);

        // 드라이버 종료
        driver.quit();
    }
}