import React from "react";
import "../../styles/user/ReportDisaster.css"
function ReportDisaster() {
  return (
    <div className="card">

      <h3>Report Disaster</h3>

      <form>

        <select id="disaster-type">
          <option>Select Disaster Type</option>
          <option>Flood</option>
          <option>Fire</option>
          <option>Earthquake</option>
          <option>Accident</option>
        </select>

        <input id="location" type="text" placeholder="Location / Area" />

        <textarea id="describe-situation"placeholder="Describe situation"></textarea>

        <input id="file" type="file" />

        <button id="submit-button" type="submit">Submit Report</button>

      </form>

    </div>
  );
}

export default ReportDisaster;