package com.mat.domain;

import java.time.LocalDateTime;

import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Builder.Default;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity(name="MAT_REVIEW")
@Table(name="MAT_REVIEW")
public class matReview {
	  
	  /* 	mat Review Table
	 * 	맛탐정리뷰ID (PK) 	: mat_review_id		varchar2(10)
	 *  별점 				: rating			double
	 * 	좋아요			: likes_count		number	
	 * 	리뷰내용 			: review_content	varchar2(1000)
	 * 	작성일자			: created_at		date
	 * 	사진ID			: photo_id(FK)		varchar2(10)
	 * 	가게 ID (FK)		: store_id			varchar2(10)
	 *  작성자 ID 			: user_id 			varchar2(20)			
	 */
	
	// 맛탐정 리뷰 ID
	@Id
	@Column(name="review_id" ,length=10)
	@NonNull
	@SequenceGenerator (
			name = "matRvseq",
			sequenceName = "matRvseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="review_id")
	private int matReviewId;
	
	// 맛탐정 별점
	@Column(name="rating")
	@NonNull
	private double rating;

	// 이 리뷰의 좋아요
	@Column(name="likes_count" )
	@NonNull
	private int matLikeCount;
	
	// 맛탐정 리뷰 상세내용
	@Column(name="review_content",length=1000)
	@NonNull
	private String matReviewContent;
	
	// 이리뷰의 db 저장시간
	@Column(name="created_at" , columnDefinition = "DATE DEFAULT SYSDATE")
	@CreatedDate
	private LocalDateTime matCreatedTime;
	
	// 이 리뷰의 사진 url 주소
	@Column(name="photo_url" ,length=10)
	private String matPhotoUrl;
	
	// 가게 ID
	@Column(name="store_id" ,length=10)
	@NonNull
	private int storeId;
	
	// 유저아이디 
	@Column(name="user_id" ,length=20)
	@NonNull
	private String userId;
	

	

}
