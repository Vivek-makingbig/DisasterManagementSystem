const express = require("express");
const router = express.Router();

const {
  createReport,
  getAllReports,
  getMyReports
} = require("../controllers/reportController");

const {authMiddleware} = require("../controllers/auth-controller");

// User reports disaster
router.post("/report", authMiddleware, createReport);

// Admin can see all reports
router.get("/all", authMiddleware, getAllReports);

// Logged in user can see their reports
router.get("/myreports", authMiddleware, getMyReports);

module.exports = router;