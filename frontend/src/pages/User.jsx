import React from "react";
// import Sidebar from "../components/user/Sidebar";
import Topbar from "../components/user/Topbar";
import ReportDisaster from "../components/user/ReportDisaster";
import DisasterFeed from "../components/user/DisasterFeed";
import MyReports from "../components/user/MyReports";
import EmergencyContacts from "../components/user/EmergencyContacts";

import "../styles/user/user.css";


function User() {
  return (
    <div className="dashboard">

      {/* <Sidebar /> */}

      <div className="main">

        <Topbar />

        <div className="dashboard-content">

          <div className="grid-container">

            <ReportDisaster />

            <DisasterFeed />

            <MyReports />

            <EmergencyContacts />


          </div>

        </div>

      </div>
    </div>
  );
}

export default User;