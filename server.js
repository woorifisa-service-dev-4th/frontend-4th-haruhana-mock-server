const express = require("express");
const cors = require("cors");

const statisticsSummary = require("./db/statistics_summary.json");
const statisticsWeekly = require("./db/statistics_weekly.json");
const statisticsCategory = require("./db/statistics_category.json");
const {
  problems,
  CATEGORIES,
  getProblemsByCategory,
  getProblemsByLevel,
  getProblemsByCategoryAndLevel,
  getAllCategories,
} = require("./db/problems.js");

const app = express();
const PORT = 8080;

// 미들웨어
app.use(cors());
app.use(express.json());

// 응답 헬퍼 함수
const createResponse = (success, message, data) => ({
  isSuccess: success,
  statusCode: success ? 200 : 400,
  message,
  data,
});

// 문제 관련 라우트
app.get("/api/problems", (req, res) => {
  const { category, level } = req.query;

  try {
    let result;
    let message = "문제 목록 조회 성공";

    if (category && level) {
      result = getProblemsByCategoryAndLevel(category, level);
      message = `${category} 난이도 ${level} 문제 목록 조회 성공`;
    } else if (category) {
      result = getProblemsByCategory(category);
      message = `${category} 문제 목록 조회 성공`;
    } else if (level) {
      result = getProblemsByLevel(level);
      message = `난이도 ${level} 문제 목록 조회 성공`;
    } else {
      result = problems;
    }

    res.json(createResponse(true, message, { problems: result }));
  } catch (error) {
    res.status(400).json(createResponse(false, "문제 목록 조회 실패", null));
  }
});

app.get("/api/problems/categories", (req, res) => {
  try {
    res.json(
      createResponse(true, "카테고리 목록 조회 성공", {
        categories: getAllCategories(),
      })
    );
  } catch (error) {
    res
      .status(400)
      .json(createResponse(false, "카테고리 목록 조회 실패", null));
  }
});

// 통계 관련 라우트
app.get("/api/statistics/summary", (req, res) => {
  res.json(statisticsSummary);
});

app.get("/api/statistics/weekly", (req, res) => {
  res.json(statisticsWeekly);
});

app.get("/api/statistics/category", (req, res) => {
  res.json(statisticsCategory);
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(createResponse(false, "서버 오류가 발생했습니다", null));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
