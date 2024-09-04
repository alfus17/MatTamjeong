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
@Entity(name="naver_review")
@Table(name="naver_review")
public class naverReview {
	 /* 	naver Review Table
	 * 	네이버리뷰ID (PK) : nv_review_id
	 *  별점 			: rating
	 * 	좋아요		: likes_count
	 * 	리뷰내용 		: review_content
	 * 	작성일자		: created_at
	 * 	사진URL		: photo_url
	 * 	가게 ID (FK)	: store_id
	 */
	
	// 네이버 리뷰 ID
	@Id
	@Column(name="nv_review_id")
	@SequenceGenerator (
			name = "naverseq",
			sequenceName = "naverseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="naverseq")
	private String nvReviewId;
	
	// 네이버 별점
	@Column(name="rating")
	@NonNull
	private float rating;

	// 이 리뷰의 좋아요
	@Column(name="likes_count")
	@NonNull
	private int nvLikeCount;
	
	// 네이버 리뷰 상세내용
	@Column(name="review_content")
	@NonNull
	private String nvReviewContent;
	
	// 이리뷰의 db 저장시간
	@Column(name="created_at")
	@NonNull
	private LocalDateTime nvCreatedTime;
	
	// 이 리뷰의 사진 url 주소
	@Column(name="photo_url")
	private String nvPhotoUrl;
	
	// 가게 ID
	@Column(name="store_id")
	@NonNull
	private String storeId;

	

}
