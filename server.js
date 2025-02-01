const express = require("express");
const cors = require("cors");
const path = require("path");

const statisticsSummary = require("./db/statistics_summary.json");
const statisticsWeekly = require("./db/statistics_weekly.json");
const statisticsCategory = require("./db/statistics_category.json");
const problems = require("./db/problems.json");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Statistics endpoints
app.get("/api/statistics/summary", (req, res) => {
  res.json(statisticsSummary);
});

app.get("/api/statistics/weekly", (req, res) => {
  res.json(statisticsWeekly);
});

app.get("/api/statistics/category", (req, res) => {
  res.json(statisticsCategory);
});

// Problems endpoint with category filter
app.get("/api/problems", (req, res) => {
  const { category } = req.query;
  const allProblems = problems.data.problems;

  if (!category) {
    return res.json(problems);
  }

  const filteredProblems = allProblems.filter(
    (problem) => problem.category === category
  );

  res.json({
    isSuccess: true,
    statusCode: 200,
    message: `${category} 문제 목록 조회 성공`,
    data: {
      problems: filteredProblems,
    },
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
