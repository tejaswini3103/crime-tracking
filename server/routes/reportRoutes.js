// routes/reportRoutes.js
const express = require('express');
const { createReport, getReports, updateReportStatus } = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createReport);
router.get('/', protect, getReports);
router.put('/:id/status', protect, updateReportStatus);

module.exports = router;
