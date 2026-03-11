import React from "react";
import "../../styles/user/DisasterFeed.css";

function DisasterFeed() {
  return (
    <div className="card disaster-feed">

      <h3>Emergency Notices</h3>

      <div className="notice-list">

        <div className="notice warning">
          <strong>Flood Alert</strong>
          <p>Salt Lake area – Rescue team currently responding.</p>
        </div>

        <div className="notice danger">
          <strong>Fire Incident</strong>
          <p>Park Street – Authorities notified and response underway.</p>
        </div>

        <div className="notice info">
          <strong>Accident</strong>
          <p>EM Bypass – Situation verified, medical team dispatched.</p>
        </div>

        <div className="notice warning">
          <strong>Heavy Rain Warning</strong>
          <p>Expected in Kolkata region tonight. Stay indoors if possible.</p>
        </div>

        <div className="notice danger">
          <strong>Landslide Risk</strong>
          <p>Hilly areas nearby reported unstable terrain.</p>
        </div>

        <div className="notice info">
          <strong>Road Block</strong>
          <p>Major traffic disruption reported near bypass.</p>
        </div>

      </div>

    </div>
  );
}

export default DisasterFeed;