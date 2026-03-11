import React from "react";

function Topbar() {
  return (
    <div className="topbar">

      <h3>Admin Dashboard</h3>

      <div className="profile">
        <span>Welcome, Admin</span>
        <button className="logout-btn">Logout</button>
      </div>

    </div>
  );
}

export default Topbar;