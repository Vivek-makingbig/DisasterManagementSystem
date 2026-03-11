import React from "react";
import "../../styles/user/MyReports.css";

function MyReports() {
  return (
    <div className="card my-reports">

      <h3>My Reports</h3>

      <div className="report-list">

        <div className="report verified">
          <strong>Flood</strong>
          <p>Status: Verified</p>
        </div>

        <div className="report progress">
          <strong>Fire</strong>
          <p>Status: Rescue Team Assigned</p>
        </div>

        <div className="report resolved">
          <strong>Accident</strong>
          <p>Status: Situation Resolved</p>
        </div>

        <div className="report progress">
          <strong>Landslide</strong>
          <p>Status: Authorities Investigating</p>
        </div>

        <div className="report verified">
          <strong>Water Logging</strong>
          <p>Status: Verified by Response Team</p>
        </div>

      </div>

    </div>
  );
}

export default MyReports;