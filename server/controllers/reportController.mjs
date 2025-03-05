// controllers/reportController.js
const Report = require('../models/reportModel.mjs');

const createReport = async (req, res) => {
  try {
    const { crimeType, location, description } = req.body;
    const report = await Report.create({
      user: req.user.id,
      crimeType,
      location,
      description,
    });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error creating report' });
  }
};

const getReports = async (req, res) => {
  try {
    const reports = await Report.find().populate('user', 'name email');
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reports' });
  }
};

const updateReportStatus = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ message: 'Report not found' });

    report.status = req.body.status || report.status;
    await report.save();
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error updating report' });
  }
};

module.exports = { createReport, getReports, updateReportStatus };
