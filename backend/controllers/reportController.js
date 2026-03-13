const ReportDisaster = require("../models/user/reportDisaster");

// Create Report
const createReport = async (req, res) => {
  try {

    const { disasterType, location, description } = req.body;

    const report = new ReportDisaster({
      disasterType,
      location,
      description,
      reportedBy: req.User.id
    });

    await report.save();

    res.status(201).json({
      message: "Disaster reported successfully",
      report
    });

  } catch (error) {
    res.status(500).json({
      message: "Error reporting disaster",
      error: error.message
    });
  }
};


// Get All Reports (for admin)
const getAllReports = async (req, res) => {
  try {

    const reports = await ReportDisaster
      .find()
      .populate("reportedBy", "userName email");

    res.json(reports);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get Reports of Logged In User
const getMyReports = async (req, res) => {
  try {

    const reports = await ReportDisaster.find({
      reportedBy: req.User.id
    });

    res.json(reports);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update report status(Admin)
const updateReportStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedReport = await ReportDisaster.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({ message: "Report Status updated", updatedReport });
  } catch (error) {
    res.status(500).json({ message: "Error updating status", error: error.message });
  }
};

//Delete report(Admin)
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReport = await ReportDisaster.findByIdAndDelete(id);

    if (!deletedReport) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting report", error: error.message });
  }
};



module.exports = {
  createReport,
  getAllReports,
  getMyReports,
  updateReportStatus,
  deleteReport
};