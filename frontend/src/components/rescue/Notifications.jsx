import React from "react";

function Notifications() {
  return (
    <div className="card">

      <h3>Notifications</h3>

      <div className="notice-container">

        <div className="notification-item">
          New mission assigned by Admin
        </div>

        <div className="notification-item">
          Flood mission updated
        </div>

        <div className="notification-item">
          Rescue completed successfully
        </div>

      </div>

    </div>
  );
}

export default Notifications;