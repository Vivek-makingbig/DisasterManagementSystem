import React from "react";
import "../../styles/user/Topbar.css";

function Topbar() {

  const handleLogout = () => {
    console.log("Logout clicked");
    // later you can clear token and redirect
  };

  return (
    <div className="topbar">

      <div className="welcome">
        <h3>Welcome to Disaster Management Dashboard</h3>
        <p>Report incidents and stay updated with emergency alerts.</p>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default Topbar;