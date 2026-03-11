import React from "react";

function UpdateRescueStatus() {
  return (
    <div className="card">

      <h3>Update Rescue Status</h3>

      <form>

        <select>
          <option>Select Mission</option>
          <option>Flood - Salt Lake</option>
          <option>Fire - Park Street</option>
        </select>

        <select>
          <option>Update Status</option>
          <option>In Progress</option>
          <option>Rescue Ongoing</option>
          <option>Rescue Completed</option>
        </select>

        <button type="submit">Update</button>

      </form>

    </div>
  );
}

export default UpdateRescueStatus;