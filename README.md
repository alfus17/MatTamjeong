# 맛탐정 (Hot Place Review Service)

## 팀 소개

#### 팀명: 맛탐정 <br>
#### 팀장 : 장광진 | 팀원 : 양승혁 , 임현승 |

### 프로젝트 소개
- 여러 플랫폼의 리뷰들을 한눈에 비교할수 있도록 통합리뷰시스템 구축
- 오픈소스 및 오픈API를 활용하여 플랫폼 구성
- 메뉴, 가게명, 지역의 검색을 통한 빠른 맛집 비교

### 🚀 Stacks
<div> 
  <img src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle DB">
</div>
<div> 
  <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java">   <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logo=jpa&logoColor=white" alt="JPA"> </div>
<div> 
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"> 
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"> 
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML"> 
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS"> </div>
<div> 
  <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VS Code">
  <img src="https://img.shields.io/badge/SQL%20Developer-4479A1?style=for-the-badge&logo=oracle&logoColor=white" alt="SQL Developer">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git"> 
</div>
<div> 
  <img src="https://img.shields.io/badge/Naver%20Maps%20API-03C75A?style=for-the-badge&logo=naver&logoColor=white" alt="Naver Maps API"> 
  <img src="https://img.shields.io/badge/Naver%20Geocoding%20API-03C75A?style=for-the-badge&logo=naver&logoColor=white" alt="Naver Geocoding API"> 

</div>

---

##  프로젝트 설계
### 간트차트
![image](https://github.com/user-attachments/assets/9e12b325-d992-4205-85ba-5cd59a949fed)

### 유즈 케이스 다이어그램
![image](https://github.com/user-attachments/assets/4080c5e2-bf5c-47a7-97fa-ed5997cbc1e2)

### ERD 
![image](https://github.com/user-attachments/assets/3e9e2d21-3cd1-4748-a51c-4043c9cea585)

---

## 기능 소개 및 시연
### 로그인/회원가입

 ![image](https://github.com/user-attachments/assets/68cb0cae-782e-416d-bfb5-38ec32b86227)

#### ⭐ 로그인 기능구현
- 모든 페이지에서 로그인/회원가입 버튼 클릭 시 모달창이 활성화됨.
- 모달 내에서 사용자 입력을 처리하고 서버로 로그인/회원가입 요청 전송.
- 로그인 성공 시 모달창이 자동으로 닫히고, 사용자 상태를 업데이트.
- 로그인 성공 시 브라우저의 세션 스토리지에 userId 및 token을 저장.

### 3.2 메인 페이지
![image](https://github.com/user-attachments/assets/1132232a-8685-4678-89ee-8f0a0d85c8db)

#### ⭐기능구현
- 각각의 지역 태그에 맞는 데이터를 서버 API를 통해 화면에 표시 
- 초기에 데이터 10 개 이후 더보기를 통하여 10개씩 추가 로드
- 지도 Component를 만들어 db에 저장된 상호명 및 가게 위치를 전송할 경우 지도에 마킹 및 이미지 로드하도록 구성
- 

![맛탐정메인페이지2](https://github.com/user-attachments/assets/60923e4a-e05b-4f9c-816a-4c30d76178df)
사용자의 맞춤에 맞도록 확인 가능

### 3.3 검색 기능
![image](https://github.com/user-attachments/assets/c7d01f63-9298-4010-892f-b9ab0e3cb505)

- **카테고리 및 키워드 검색**
  - 관련 가게 데이터 호출.
  - 위치 데이터 맵과 연동.

### 3.4 상세페이지
![image](https://github.com/user-attachments/assets/09f3abce-e4c2-4b70-89d6-fbcf819f1e1d)

- **각 플랫폼 별 리뷰**
- **각 플랫폼 별 별점**
- **가게의 상세 정보 및 메뉴**

### 3.5 마이페이지
![image](https://github.com/user-attachments/assets/38fa7e2f-4876-4f63-9480-76a6cb64e8f2)
- **정보 수정**
- **나의 리뷰 보기**



---

## 4. 장점
- **편리성**:
  - 가게 위치와 별점 정보를 한눈에 확인 가능.
  - 핫플레이스 추천으로 유동인구가 많은 지역 맛집을 빠르게 추천.
- **효율성**:
  - 3개 플랫폼의 리뷰를 한 번에 비교.
  - 대표 메뉴와 상세 정보들을 직관적으로 제공.
- **최적화**:
  - 랜더링 최소화.
  - 컴포넌트 분리로 유지보수 용이.

---


## 5. 보완점 및 업데이트 방안


- **기능 개선**:
  ![image](https://github.com/user-attachments/assets/a8c0942a-802a-468f-9b5a-4525d6e2dfba)
  - 좋아요 및 즐겨찾기 기능 추가 예정.
  - 관리자 기능 강화.
  - 인증 로직 개선.
  - 크롤링 서버 보완
    
- **배포 및 자동화**:
  ![image](https://github.com/user-attachments/assets/2211c8d0-eec1-4052-a2d3-5c74a9760783)

  - Webhook 및 배포 스크립트 활용.
  - Jenkins 기반 자동화.

---

## Q&A
- 감사합니다!
