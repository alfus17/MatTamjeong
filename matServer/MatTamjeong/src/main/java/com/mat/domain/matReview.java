package com.mat.domain;

import java.time.LocalDateTime;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity(name="mat_review")
@Table(name="mat_review")
public class matReview {
	  
	  /* 	mat Review Table
	 * 	맛탐정리뷰ID (PK) 	: mat_review_id
	 *  별점 				: rating
	 * 	좋아요			: likes_count
	 * 	리뷰내용 			: review_content
	 * 	작성일자			: created_at
	 * 	사진ID			: photo_id(FK)
	 * 	가게 ID (FK)	: store_id
	 */
	
	// 맛탐정 리뷰 ID
	@Id
	@Column(name="mat_review_id")
	@SequenceGenerator (
			name = "matseq",
			sequenceName = "matseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="matseq")
	private long matReviewId;
	
	// 맛탐정 별점
	@Column(name="rating")
	@NonNull
	private float rating;

	// 이 리뷰의 좋아요
	@Column(name="likes_count")
	@NonNull
	private int matLikeCount;
	
	// 맛탐정 리뷰 상세내용
	@Column(name="review_content")
	@NonNull
	private String matReviewContent;
	
	// 이리뷰의 db 저장시간
	@Column(name="created_at")
	@NonNull
	private LocalDateTime matCreatedTime;
	
	// 이 리뷰의 사진 url 주소
	@Column(name="photo_url")
	private String matPhotoUrl;
	
	// 가게 ID
	@Column(name="store_id")
	@NonNull
	private String storeId;
	

	

}
