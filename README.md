# 하루하나 Mock API Server

취업 준비 서비스 [하루하나](https://github.com/woorifisa-service-dev-4th/frontend-4th-haruhana)의 프론트엔드 개발을 위한 Mock API 서버입니다.

## 📁 Directory Structure

```
haruhana-mock-server/
├── .github/
│   └── workflows/        # GitHub Actions CI/CD 설정
├── db/                   # 데이터
│   ├── problems.js
│   ├── statistics_category.json
│   ├── statistics_summary.json
│   └── statistics_weekly.json
├── public/               # 정적 파일
│   └── index.html        # API 문서 페이지
├── server.js             # 메인 서버 파일
├── package.json
└── README.md
```

## 🛠 Tech Stack & Technical Decision

### 기술 스택 변화 과정

#### 1. JSON Server 초기 도입

- 빠른 Mock API 서버 구축을 위해 JSON Server 채택
- 별도의 라우팅 로직 없이 DB 역할의 JSON 파일만으로 RESTful API 구현 가능

#### 2. JSON 파일 모듈화 ([관련 커밋](https://github.com/woorifisa-service-dev-4th/frontend-4th-haruhana-mock-server/commit/538f15916a37787997b7805e2b93a7363fe908e4))

- API 엔드포인트 증가로 단일 db.json 파일의 크기가 커짐 (382줄)
- 데이터 관리의 용이성을 위해 API별 JSON 파일로 분리
- CI/CD 파이프라인에서 분리된 JSON 파일들을 병합하는 방식 채택

#### 3. Express.js로의 전환 ([관련 커밋](https://github.com/woorifisa-service-dev-4th/frontend-4th-haruhana-mock-server/commit/c586076bd6063decec5d686001e04fcdd1c7b1e3))

- JSON Server의 한계 직면
  - 쿼리 파라미터 처리의 어려움
  - 세부적인 응답 처리의 한계
- Express.js 선택 이유
  - 보다 더 유연하게 API 개발 가능
  - 현재 인프라 구조를 최소한으로 수정하여 개발 가능
    - 기존 JSON Server 기반의 레포지토리, CI/CD, 인프라 재사용
    - 프론트엔드 개발 일정 준수를 위한 현실적인 선택

### 현재 사용 기술

- **Express.js**: REST API 구현
- **GitHub Actions**: CI/CD 자동화
- **GCP**: Self-hosted Github Runner & Mock Server 호스팅

## 📌 API Endpoints

### 문제 관련 API

1. `GET /api/problems` : 전체 문제 목록 조회

   - Query Parameters
     - `category`: 카테고리별 필터링 (예: 백엔드, 프론트엔드)
     - `level`: 난이도별 필터링 (0-3)

2. `GET /api/problems/categories` : 전체 카테고리 목록 조회

### 통계 관련 API

1. `GET /api/statistics/summary` : 사용자의 요약된 통계 조회

2. `GET /api/statistics/weekly` : 사용자의 주간 문제 해결 현황 조회

3. `GET /api/statistics/category` : 사용자의 카테고리별 통계 조회

### API Response Format

```javascript
{
  isSuccess: boolean,
  statusCode: number,
  message: string,
  data: any
}
```
