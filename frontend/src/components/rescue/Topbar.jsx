import React from "react";

function Topbar() {
  return (
    <div className="topbar">

      <h3>Rescue Team Dashboard</h3>

      <div className="profile">
        <span>Welcome, Rescue Team</span>
        <button className="logout-btn">Logout</button>
      </div>

    </div>
  );
}

export default Topbar;