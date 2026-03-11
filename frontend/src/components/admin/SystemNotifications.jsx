import React from "react";

function SystemNotifications() {
  return (
    <div className="card">

      <h3>System Activity</h3>

      <div className="notice-container">

        <div className="notification-item">
          ✔ Flood report verified
        </div>

        <div className="notification-item">
          ⚠ Emergency alert sent to users
        </div>

        <div className="notification-item">
          ✔ Rescue team dispatched
        </div>

        <div className="notification-item">
          ✔ Fire report resolved
        </div>

      </div>

    </div>
  );
}

export default SystemNotifications;