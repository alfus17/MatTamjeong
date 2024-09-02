package com.mat.domain;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity(name="user_Info")
@Table(name="user_Info")
public class userInfo {
    /* 	user_info Table
 * 	회원 ID (PK)(FK) 	: user_id
 *  주소 				: user_address
 * 	상태				: user_status
 * 	리뷰ID (FK)		: review_id
 * 	즐겨찾기(FK)		: bookmark_id
 */
	// 회원 ID (PK)(FK)
	@Id
	@Column(name="user_id")
	@NonNull
	private String userId;
	
	//  주소
	@Id
	@Column(name="user_address")
	@NonNull
	private String userAddress;

	// 상태	
	@Id
	@Column(name="user_status")
	@NonNull
	private String userStatus;
	
	// 리뷰ID (FK)
	@Id
	@Column(name="review_id")
	@NonNull
	private String reviewId;
	
	// 즐겨찾기(FK)
	@Id
	@Column(name="bookmark_id")
	@NonNull
	private String bookmarId;

	

}
