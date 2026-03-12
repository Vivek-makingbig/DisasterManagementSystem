import React, { useState } from "react";
import "../../styles/user/ReportDisaster.css"
import {reportDisaster} from '../../api';
function ReportDisaster() {
  const [disasterType,setdisasterType] = useState("");
  const [location,setlocation] = useState("");
  const [description,setdescription] = useState("");

  const handleSubmit = async(e)=>
  {
    e.preventDefault();
    try {
       await reportDisaster({disasterType,location,description});
       alert("Disaster reported successfully");
       setdisasterType("");
       setlocation("");
       setdescription("");
    } catch (error) {
      alert("Error occured while reporting disaster");
      console.log(error.message);
    }
  }

  return (
    <div className="card" >

      <h3>Report Disaster</h3>

      <form onSubmit={handleSubmit}>

        <select id="disaster-type" value={disasterType} onChange={(e)=>setdisasterType(e.target.value)}>
          <option>Select Disaster Type</option>
          <option>Flood</option>
          <option>Fire</option>
          <option>Earthquake</option>
          <option>Accident</option>
        </select>

        <input id="location" type="text" value={location} onChange={(e)=>setlocation(e.target.value)} placeholder="Location / Area" />

        <textarea id="describe-situation" value={description} onChange={(e)=>setdescription(e.target.value)}placeholder="Describe situation"></textarea>

        <button id="submit-button" type="submit">Submit Report</button>

    </form>

    </div>
  );
}

export default ReportDisaster;