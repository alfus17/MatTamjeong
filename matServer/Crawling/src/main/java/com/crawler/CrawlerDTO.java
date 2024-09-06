package com.crawler;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CrawlerDTO {
	private String data;
	private String img;
	
	private List<CrawlerDTO> list;
}
