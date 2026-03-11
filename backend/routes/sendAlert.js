const express = require("express");
const router = express.Router();

const {
 createAlert,getAllAlerts
} = require("../controllers/sendAlertController");

const {authMiddleware} = require("../controllers/auth-controller");

// Admin sends alert message
router.post("/createalert", authMiddleware, createAlert);

// User can see all alerts
router.get("/allalerts", authMiddleware, getAllAlerts);



module.exports = router;