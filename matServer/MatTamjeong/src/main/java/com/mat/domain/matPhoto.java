package com.mat.domain;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity(name="mat_photo")
@Table(name="mat_photo")
public class matPhoto {
	  /* 	photo Table
	 * 	사진ID (PK) 		: photo_id		varchar2(10)
	 *  사진경로 			: image_path	varchar2(60)
	 * 	생성일				: created_at	date
	 * 	수정일 			: update_at		date
	 * 	상태				: photo_status	varchar2(10)
	 */
	 
	// 사진 ID (PK)
	@Id
	@Column(name="photo_id")
	@NonNull
	@GeneratedValue
	private String photoId;
	
	// 사진 경로
	@Column(name="image_path")
	private String imagePath;

	// 사진 올린 최초 시간
	@Column(name="created_at")
	@CreatedDate
	private LocalDateTime createTime;
	
	// 사진 수정시간
	@Column(name="update_at")
	@LastModifiedDate
	private LocalDateTime updateTime;
	
	// 사진 상태  -> 나중에 지울지 말지 결정
	@Column(name="photo_status")
	private String photoStatus;
	
	
	
	

}
