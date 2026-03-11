import React from "react";
import "../../styles/user/EmergencyContacts.css";

function EmergencyContacts() {
  return (
    <div className="card emergency-contacts">

      <h3>Emergency Contacts</h3>

      <div className="contact-grid">

        <div className="contact police">
          <h4>Police</h4>
          <p>100</p>
        </div>

        <div className="contact fire">
          <h4>Fire</h4>
          <p>101</p>
        </div>

        <div className="contact ambulance">
          <h4>Ambulance</h4>
          <p>102</p>
        </div>

        <div className="contact disaster">
          <h4>Disaster Helpline</h4>
          <p>108</p>
        </div>

        <div className="contact medical">
          <h4>Medical Emergency</h4>
          <p>104</p>
        </div>

        <div className="contact women">
          <h4>Women Helpline</h4>
          <p>1091</p>
        </div>

        <div className="contact child">
          <h4>Child Helpline</h4>
          <p>1098</p>
        </div>

        <div className="contact traffic">
          <h4>Traffic Police</h4>
          <p>103</p>
        </div>

      </div>

    </div>
  );
}

export default EmergencyContacts;