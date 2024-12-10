# 맛탐정 (Hot Place Review Service)

### 팀 소개
- **팀명**: 3조
- **팀원**: 장광진, 임현승, 양승혁

---

## 목차
1. 프로젝트 개요
2. 프로젝트 설계
3. 기능 소개 및 시연
4. 보완점 및 업데이트 방안

---

## 1. 프로젝트 개요
- **목적**: 여러 플랫폼의 리뷰를 한눈에 비교할 수 있는 핫플레이스 리뷰 서비스 제공.
- **특징**:
  - 3개 플랫폼 리뷰를 통합하여 비교 제공.
  - 지역 기반 데이터 및 가게 상세 정보 제공.

---

## 2. 프로젝트 설계
### 2.1 시스템 구성
- **크롤링 서버**: 리뷰 데이터를 수집 및 관리.
- **구상도**: 다양한 플랫폼에서 데이터를 크롤링하고 이를 통합하여 제공.

### 2.2 주요 설계 요소
- **간트 차트**: 프로젝트 일정 관리.

![image](https://github.com/user-attachments/assets/9e12b325-d992-4205-85ba-5cd59a949fed)


- **유즈 케이스 다이어그램**: 사용자 및 시스템 상호작용 정의.
![image](https://github.com/user-attachments/assets/4080c5e2-bf5c-47a7-97fa-ed5997cbc1e2)

- **ERD**: 데이터베이스 설계.
![image](https://github.com/user-attachments/assets/3e9e2d21-3cd1-4748-a51c-4043c9cea585)

  
- **개발 환경**:
  - ![Backend](https://img.shields.io/badge/Backend-Spring%20Boot-brightgreen)     ![Frontend](https://img.shields.io/badge/Frontend-React%20(MUI)-blue)    ![Database](https://img.shields.io/badge/Database-OracleDB-orange)

---

## 3. 기능 소개 및 시연
### 3.1 회원 기능
- **회원가입**
 ![image](https://github.com/user-attachments/assets/6de33c1b-e24b-4519-9bd9-729262a6aaca)
  
- **로그인 및 사이드바**
- **아이디 및 비밀번호 찾기**

### 3.2 메인 페이지
![image](https://github.com/user-attachments/assets/ddb7f66d-a2c7-4eb6-8801-cbf1fb6480dd)
- **지역 데이터 연동 및 가게 데이터 출력**
- **맵 연동**: Hover 기능 및 클릭 시 가게 상세 페이지 이동.
- **코드 구현 설명**:
  - JSON 데이터 활용.
  - 페이징 처리.
  - 별점 반환 기능.

### 3.3 검색 기능
![image](https://github.com/user-attachments/assets/a8ba9197-bc66-4219-862e-c6c24cc66460)

- **카테고리 및 키워드 검색**
  - 관련 가게 데이터 호출.
  - 위치 데이터 맵과 연동.

### 3.4 상세페이지
![image](https://github.com/user-attachments/assets/09f3abce-e4c2-4b70-89d6-fbcf819f1e1d)

- **각 플랫폼 별 리뷰**
- **각 플랫폼 별 별점**
- **가게의 상세 정보 및 메뉴**

### 3.5 마이페이지
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
  - 좋아요 및 즐겨찾기 기능 추가 예정.
  - 관리자 기능 강화.
  - 인증 로직 개선.
- **배포 및 자동화**:
  - Webhook 및 배포 스크립트 활용.
  - Jenkins 기반 자동화.

---

## Q&A
- 감사합니다!
