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
@Entity(name="dining_review")
@Table(name="dining_review")
public class diningReview {
	 /* 	naver Review Table
	 * 	네이버리뷰ID (PK) 	: nv_review_id		varchar2(10)
	 *  별점 				: rating			double
	 * 	좋아요				: likes_count		number
	 * 	리뷰내용 			: review_content	varchar2(1000)
	 * 	가게 ID (FK)		: store_id
	 */
	
	// 네이버 리뷰 ID
	@Id
	@Column(name="review_id")
	@SequenceGenerator (
			name = "dcRvseq",
			sequenceName = "dcRvseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="dcRvseq")
	private int nvReviewId;
	
	// 네이버 별점
	@Column(name="rating")
	@NonNull
	private double rating;

	// 이 리뷰의 좋아요
	@Column(name="likes_count")
	@NonNull
	private int nvLikeCount;
	
	// 네이버 리뷰 상세내용
	@Column(name="review_content")
	@NonNull
	private String nvReviewContent;

	// 가게 ID
	@Column(name="store_id")
	@NonNull
	private int storeId;

	

}
