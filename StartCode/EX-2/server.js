// server.js
import express, { json, text } from "express";
import courses from "./course.js";
import { logger } from "./logger.js";
import { validateQuery } from "./validateQuery.js";
import { authMiddleware } from "./auth.js";
const app = express();
const PORT = 3000;
// Middleware
app.use(logger);
// app.use(authMiddleware);
// Route: GET /departments/:dept/courses
app.get(
  "/departments/:dept/courses",
  authMiddleware,
  validateQuery,
  (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;
    var courseFilter = courses.filter((courses) => courses.department === dept);
    if (level) {
      courseFilter = courseFilter.filter((courses) => courses.level === level);
    } else if (minCredits) {
      courseFilter = courseFilter.filter(
        (courses) => courses.minCredits === minCredits
      );
    } else if (maxCredits) {
      courseFilter = courseFilter.filter(
        (courses) => courses.maxCredits === maxCredits
      );
    } else if (semester) {
      courseFilter = courseFilter.filter(
        (courses) => courses.semester === semester
      );
    } else if (instructor) {
      courseFilter = courseFilter.filter(
        (courses) => courses.instructor === instructor
      );
    }
    res.json(courseFilter);
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
