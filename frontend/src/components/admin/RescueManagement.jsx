import React from "react";

function RescueManagement() {
  return (
    <div className="card">

      <h3>Rescue Team Management</h3>

      <div className="notice-container">

        <div className="rescue-item">
          Flood - Salt Lake
          <button>Assign Team</button>
        </div>

        <div className="rescue-item">
          Fire - Park Street
          <span className="assigned">Team Alpha Assigned</span>
        </div>

        <div className="rescue-item">
          Accident - EM Bypass
          <button>Assign Team</button>
        </div>

      </div>

    </div>
  );
}

export default RescueManagement;