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
@Entity(name="KAKAO_REVIEW")
@Table(name="KAKAO_REVIEW")
public class kakaoReview {
	  /* 	kakao Review Table
	 * 	카카오ID (PK) : kg_review_id		varchar2(10)
	 *  별점 			: rating			float
	 * 	좋아요		: likes_count		number
	 * 	리뷰내용 		: review_content	varchar2(1000)
 	 * 	가게 ID (FK)	: store_id			varchar2(10)
	 */
	 
	// 카카오 리뷰 ID
	@Id
	@Column(name="review_id" ,length=10 )
	@SequenceGenerator (
			name = "kgRvseq",
			sequenceName = "kgRvseq",
			allocationSize = 1
			)
	@GeneratedValue(generator="kgRvseq")
	private int kgReviewId;
	
	// 카카오 별점(
	@Column(name="rating")
	@NonNull
	private double rating;

	// 이 리뷰의 좋아요 
	@Column(name="likes_count")
	private int kgLikeCount;
	
	// 카카오 리뷰 상세내용
	@Column(name="review_content" ,length=1000)
	@NonNull
	private String kgReviewContent;
	
	// 가게 ID
	@Column(name="store_id" ,length=10)
	private int storeId;

	

}
