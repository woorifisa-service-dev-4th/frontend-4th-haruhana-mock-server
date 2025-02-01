const fs = require('fs');
const path = require('path');

const summary = require('./db/statistics_summary.json');
const weekly = require('./db/statistics_weekly.json');
const category = require('./db/statistics_category.json');
const problems = require('./db/problems.json');

const mergedData = {
  ...summary,
  ...weekly,
  ...category,
  ...problems
};

fs.writeFileSync(
  path.join(__dirname, 'db.json'),
  JSON.stringify(mergedData, null, 2)
);

console.log('JSON files merged successfully into db.json');
