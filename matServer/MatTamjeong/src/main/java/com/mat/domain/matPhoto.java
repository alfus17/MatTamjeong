package com.mat.domain;

import java.time.LocalDateTime;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity(name="mat_photo")
@Table(name="mat_photo")
public class matPhoto {
	  /* 	photo Table
	 * 	사진ID (PK) 		: photo_id
	 *  사진경로 			: image_path
	 * 	생성일			: created_at
	 * 	수정일 			: update_at
	 * 	상태				: photo_status
	 */
	 
	// 사진 ID (PK)
	@Id
	@Column(name="photo_id")
	@NonNull
	private String photoId;
	
	// 사진 경로
	@Id
	@Column(name="image_path")
	private String imagePath;

	// 사진 올린 최초 시간
	@Id
	@Column(name="created_at")
	@NonNull
	private LocalDateTime createTime;
	
	// 사진 수정시간
	@Id
	@Column(name="update_at")
	private LocalDateTime updateTime;
	
	// 사진 상태
	@Id
	@Column(name="photo_status")
	private String photoStatus;
	
	

}
