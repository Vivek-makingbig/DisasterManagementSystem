import React from "react";
import Topbar from "../components/admin/Topbar";
import AllReports from "../components/admin/AllReports";
import VerifyReports from "../components/admin/VerifyReports";
import RescueManagement from "../components/admin/RescueManagement";
import SendAlert from "../components/admin/SendAlert";
import SystemNotifications from "../components/admin/SystemNotifications";
// import Footer from "../components/admin/Footer";

import "../styles/admin.css";

function Admin() {
  return (
    <div className="dashboard">

      <div className="main">

        <Topbar />

        <div className="dashboard-content">

          <div className="grid-container">

            <SendAlert />

            <AllReports />

            <VerifyReports />

            <RescueManagement />

            <SystemNotifications />

          </div>

        </div>

        {/* <Footer /> */}

      </div>

    </div>
  );
}

export default Admin;