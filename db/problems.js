// 카테고리 상수 정의
const CATEGORIES = {
  BACKEND: "백엔드",
  FRONTEND: "프론트엔드",
  NETWORK: "네트워크",
  DATABASE: "데이터베이스",
  OS: "운영체제",
  DS: "자료구조"
};

// 난이도 상수 정의
const LEVELS = {
  BASIC: "0",
  INTERMEDIATE: "1",
  ADVANCED: "2",
  EXPERT: "3"
};

const problems = [
  {
    id: 1,
    name: "REST API와 SOAP API",
    category: CATEGORIES.BACKEND,
    level: LEVELS.BASIC
  },
  {
    id: 2,
    name: "HTML5 시맨틱 태그",
    category: CATEGORIES.FRONTEND,
    level: LEVELS.INTERMEDIATE
  },
  {
    id: 3,
    name: "TCP 3-way handshake",
    category: CATEGORIES.NETWORK,
    level: LEVELS.ADVANCED
  },
  {
    id: 4,
    name: "SQL DDL",
    category: CATEGORIES.DATABASE,
    level: LEVELS.EXPERT
  },
  { id: 5, name: "교착상태", category: CATEGORIES.OS, level: LEVELS.BASIC },
  { id: 6, name: "스택", category: CATEGORIES.DS, level: LEVELS.INTERMEDIATE },
  {
    id: 7,
    name: "스프링 부트 @Autowired 어노테이션",
    category: CATEGORIES.BACKEND,
    level: LEVELS.ADVANCED
  },
  {
    id: 8,
    name: "JavaScript 비동기 처리",
    category: CATEGORIES.FRONTEND,
    level: LEVELS.EXPERT
  },
  {
    id: 9,
    name: "IP주소 MAC 주소 변환 프로트콜",
    category: CATEGORIES.NETWORK,
    level: LEVELS.BASIC
  },
  {
    id: 10,
    name: "트랜잭션의 ADID 속성",
    category: CATEGORIES.DATABASE,
    level: LEVELS.INTERMEDIATE
  },
  {
    id: 11,
    name: "가상 메모리 관리 기법",
    category: CATEGORIES.OS,
    level: LEVELS.ADVANCED
  },
  {
    id: 12,
    name: "자가 균형 이진 탐색 트리",
    category: CATEGORIES.DS,
    level: LEVELS.EXPERT
  },
  {
    id: 13,
    name: "백엔드 시스템에서 캐싱의 주된 목적",
    category: CATEGORIES.BACKEND,
    level: LEVELS.BASIC
  },
  { id: 14, name: "React", category: CATEGORIES.FRONTEND, level: LEVELS.INTERMEDIATE },
  {
    id: 15,
    name: "비연결형 프로트콜",
    category: CATEGORIES.NETWORK,
    level: LEVELS.ADVANCED
  },
  {
    id: 16,
    name: "데이터베이스 인텍스 자료구조",
    category: CATEGORIES.DATABASE,
    level: LEVELS.EXPERT
  },
  { id: 17, name: "동기화", category: CATEGORIES.OS, level: LEVELS.BASIC },
  { id: 18, name: "배열", category: CATEGORIES.DS, level: LEVELS.INTERMEDIATE },
  {
    id: 19,
    name: "스프링 부트의 자동 구성(Auto-configuration) 기능",
    category: CATEGORIES.BACKEND,
    level: LEVELS.ADVANCED
  },
  {
    id: 20,
    name: "웹 애플리케이션의 성능",
    category: CATEGORIES.FRONTEND,
    level: LEVELS.EXPERT
  },
  {
    id: 21,
    name: "DDos 공격 특징",
    category: CATEGORIES.NETWORK,
    level: LEVELS.BASIC
  },
  {
    id: 22,
    name: "데이터 검색 속도 자료구조",
    category: CATEGORIES.DATABASE,
    level: LEVELS.INTERMEDIATE
  },
  {
    id: 23,
    name: "페이지 교체 알고리즘",
    category: CATEGORIES.OS,
    level: LEVELS.ADVANCED
  },
  {
    id: 24,
    name: "해시 테이블",
    category: CATEGORIES.DS,
    level: LEVELS.EXPERT
  },
  {
    id: 25,
    name: "SQL Injection 공격을 방지하는 방법",
    category: CATEGORIES.BACKEND,
    level: LEVELS.BASIC
  },
  {
    id: 26,
    name: "반응형 웹 디자인을 구현 CSS",
    category: CATEGORIES.FRONTEND,
    level: LEVELS.INTERMEDIATE
  },
  {
    id: 27,
    name: "TLS/SSL 프로토콜",
    category: CATEGORIES.NETWORK,
    level: LEVELS.ADVANCED
  },
  {
    id: 28,
    name: "제 1정규형의 조건",
    category: CATEGORIES.DATABASE,
    level: LEVELS.EXPERT
  },
  {
    id: 29,
    name: "세마포어와 뮤텍스",
    category: CATEGORIES.OS,
    level: LEVELS.BASIC
  },
  {
    id: 30,
    name: "Array, ArrayList, LinkedList",
    category: CATEGORIES.DS,
    level: LEVELS.INTERMEDIATE
  },
];

// 유틸리티 함수들
const getAllCategories = () => Object.values(CATEGORIES);

const getProblemsByCategory = (category) => {
  return problems.filter(problem => problem.category === category);
};

const getProblemsByLevel = (level) => {
  return problems.filter(problem => problem.level === level);
};

const getProblemsByCategoryAndLevel = (category, level) => {
  return problems.filter(
    problem => problem.category === category && problem.level === level
  );
};

module.exports = {
  problems,
  CATEGORIES,
  LEVELS,
  getAllCategories,
  getProblemsByCategory,
  getProblemsByLevel,
  getProblemsByCategoryAndLevel
};
