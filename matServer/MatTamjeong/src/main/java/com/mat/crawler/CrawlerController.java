package com.mat.crawler;

import io.github.bonigarcia.wdm.WebDriverManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.json.simple.JSONObject;
import org.openqa.selenium.By;
import org.openqa.selenium.By.ByClassName;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.devtools.v126.network.model.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

import com.mat.domain.Store;
import com.mat.service.StoreService;

@SpringBootApplication
public class CrawlerController implements CommandLineRunner {
	
	@Autowired
	StoreService storeService;
	
    public static void main(String[] args) {
        SpringApplication.run(CrawlerController.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
    	StoreCrawler();
    }
    public void StoreCrawler() throws Exception  {
        // WebDriver 설정
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        
        JSONObject jsonObject = new JSONObject();
        List<Store> StoreList = new ArrayList<>();

        // TODO 키워드 배열 for문 으로 구성
        String keyword = "성복역 맛집";

        // 다이닝코드에 맛집 키워드 검색
        driver.get("https://www.diningcode.com/list.dc?query="+keyword); // 크롤링할 URL 입력
        
        // class이름이 Info라는 데이터 가져오기
        List<WebElement> elements = driver.findElements(By.className("Info"));
        for (WebElement element : elements) {
        	System.out.println(element.getText());

        }
        
        // 타이틀 가져오기
        List<WebElement> h2_elements = driver.findElements(By.tagName("h2"));
        // 타이틀 아이디 담을 배열
        String []titleIds =new String[h2_elements.size()];
        
        // 상세페이지 타이틀 아이디 가져오기
        for (int i=0; i<h2_elements.size(); i++) {
        	// title id 값 -> 해당 매장의 상세페이지 및 리뷰 조회시 필요
        	titleIds[i] = h2_elements.get(i).getAttribute("id").substring(5);
            System.out.println(titleIds[i]);
            System.out.println("-------------");
        }
        
        
        // 다이닝코드 상세정보 페이지
        String url ="https://www.diningcode.com/profile.php?rid=";
        for(String title : titleIds ) {
            /* 	Store Table
             * 	가게 ID (PK) : store_id
             *  가게 이름 		: store_name
             * 	가게 주소		: store_address
             * 	지도위치(lat) 	: store_location_lat
             *	지도위치(lat)	: store_location_lng
             * 	영업시간		: business_hours
             * 	상세정보		: details
             * 	음식카테고리 	: food_category
             * 	생성일		: created_at
             * 	수정일 		: update_at
             * 	상태 			: store_status
             */
        	
        	// 배열의 타이틀 아이디들 가져와서 url 조합 하여 크롤링
        	driver.get(url+title);
        	 // 가게이름 가져오기
            List<WebElement> store_name = driver.findElements(By.className("tit").cssSelector("h1"));
//            jsonObject.put("store_name",store_name.get(0).getText());
            
            // 가게 주소 locat .get(0).getText()
            List<WebElement> adress = driver.findElements(By.cssSelector("li").className("locat"));
//            jsonObject.put("store_address",adress.get(0).getText().split("\n")[0].replace("지번", ""));
//            System.out.println(adress.get(0).getText().split("\n")[0]);
            
            // lat 지도 위치 좌표 .get(i).getAttribute("value")
            List<WebElement> location_lat = driver.findElements(By.id("hdn_lat"));
//            jsonObject.put("store_location_lat",Double.parseDouble(location_lat.get(0).getAttribute("value")));
            
            // lng 지도 위치 좌표 .get(i).getAttribute("value")
            List<WebElement> location_lng = driver.findElements(By.id("hdn_lng"));
//            jsonObject.put("store_location_lng",Double.parseDouble(location_lng.get(0).getAttribute("value")));

            //영업시간
            List<WebElement> business_hours = driver.findElements(By.cssSelector("p").className("r-txt").id("div_detail"));
            // 0번째 인덱스 기준으로 데이터 넣기?
//            jsonObject.put("business_hours", business_hours.get(0).getText().split("더보기")[0]);
            	
            //상세정보  .get(0).getText()
            List<WebElement> details = driver.findElements(By.className("basic-info"));
//            jsonObject.put("details", details.get(0).getText());
            
            Store store = new Store();
            store.setStoreName(store_name.get(0).getText());
            store.setStoreAddress(adress.get(0).getText().split("\n")[0].replace("지번", ""));
            store.setStoreLocationLat(Double.parseDouble(location_lat.get(0).getAttribute("value")));
            store.setStoreLocationLng(Double.parseDouble(location_lng.get(0).getAttribute("value")));
            store.setBusinessHours(business_hours.get(0).getText().split("더보기")[0]);
            store.setDetails( details.get(0).getText());
            
            
            StoreList.add(store); 
        }
        storeService.saveStoreALL(StoreList);
        // 드라이버 종료
        driver.quit();
    }

}