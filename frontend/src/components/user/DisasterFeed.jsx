import {React,useState,useEffect} from "react";
import "../../styles/user/DisasterFeed.css";
import {getAllAlertMessages} from '../../api';

function DisasterFeed() {
  const [alerts,setAlerts] = useState([]);
    const[loading,setloading] = useState(true);
    const[error,seterror] = useState(null);
    useEffect(()=>
    {
      const fetchAlerts = async()=>
      {
        try
        {
          setloading(true);
          const response = await getAllAlertMessages();
          setAlerts(response.data || response);
          console.log(response);
        }
        catch(err)
        {
          seterror("Error occured while displaying reports");
          console.log(err.message);
        }
        finally
        {
          setloading(false);
        }
      }
      fetchAlerts();
    },[])
  return (
    <div className="card disaster-feed">

      <h3>Emergency Notices</h3>

      <div className="notice-list">

        {/* <div className="notice warning"> */}
          {alerts.length>0?(
        alerts.map((alert)=>(
       <div   key={alert.id || alert._id} >
          <strong className="notice">{alert.alertMessage}</strong>
        </div>
        ))) : (<p className="notice">No alert message found</p>)
}

        

      {/* </div> */}

    </div>
    </div>
  );
}

export default DisasterFeed;