import React from "react";

function AssignedMissions() {
  return (
    <div className="card">

      <h3>Assigned Missions</h3>

      <div className="notice-container">

        <div className="mission-item">
          Flood - Salt Lake
          <span className="status assigned">Assigned</span>
        </div>

        <div className="mission-item">
          Fire - Park Street
          <span className="status progress">In Progress</span>
        </div>

      </div>

    </div>
  );
}

export default AssignedMissions;