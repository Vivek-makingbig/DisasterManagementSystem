import React from "react";

function AllReports() {
  return (
    <div className="card">

      <h3>All Disaster Reports</h3>

      <div className="notice-container">

        <div className="notice-item">
          <strong>Flood</strong> - Salt Lake
          <span className="status pending">Pending</span>
        </div>

        <div className="notice-item">
          <strong>Fire</strong> - Park Street
          <span className="status verified">Verified</span>
        </div>

        <div className="notice-item">
          <strong>Accident</strong> - EM Bypass
          <span className="status rescue">Rescue Assigned</span>
        </div>

        <div className="notice-item">
          <strong>Flood</strong> - Dum Dum
          <span className="status pending">Pending</span>
        </div>

      </div>

    </div>
  );
}

export default AllReports;