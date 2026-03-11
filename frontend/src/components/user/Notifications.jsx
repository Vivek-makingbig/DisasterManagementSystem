import React from "react";
import "../../styles/user/Notifications.css";

function Notifications() {
  return (
    <div className="card notifications">

      <h3>Notifications</h3>

      <div className="notification-feed">

        <div className="notification warning">
          <div className="dot"></div>
          <div className="message">
            <p>Flood warning issued in Sector V</p>
            <span>5 minutes ago</span>
          </div>
        </div>

        <div className="notification warning">
          <div className="dot"></div>
          <div className="message">
            <p>Heavy rainfall expected tonight</p>
            <span>20 minutes ago</span>
          </div>
        </div>

        <div className="notification success">
          <div className="dot"></div>
          <div className="message">
            <p>Rescue operation completed in Park Street</p>
            <span>1 hour ago</span>
          </div>
        </div>

        <div className="notification info">
          <div className="dot"></div>
          <div className="message">
            <p>Emergency teams dispatched to Salt Lake</p>
            <span>2 hours ago</span>
          </div>
        </div>

        <div className="notification info">
          <div className="dot"></div>
          <div className="message">
            <p>Weather department issued storm advisory</p>
            <span>3 hours ago</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Notifications;