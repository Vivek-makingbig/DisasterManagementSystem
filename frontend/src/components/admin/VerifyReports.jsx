import React from "react";

function VerifyReports() {
  return (
    <div className="card">

      <h3>Verify Reports</h3>

      <div className="notice-container">

        <div className="verify-item">
          Flood - Sector V
          <div>
            <button className="verify-btn">Verify</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>

        <div className="verify-item">
          Fire - New Town
          <div>
            <button className="verify-btn">Verify</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default VerifyReports;