import React from "react";
import "../styles/home.css";
import logo from '../assets/logo.jpg';

function Home() {
  return (
    <div className="landing">

      {/* Navbar */}

      <nav className="navbar">
        <img src={logo} id="logo" alt="Logo" ></img>
         <ul className="Navbar-items">
          <li>Dashboard</li>
          <li>Donate</li>
          <li>Resources</li>
         </ul>
        <div className="nav-links">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>


      {/* Hero Section */}

       <section className="hero">

         <div id="hero-container-writing">
        <h1>Report Disasters. Save Lives.</h1>

        <p>
          A platform where citizens can report disasters and rescue teams
          respond quickly to emergencies.
        </p>
        </div> 

        <div className="hero-buttons">
          <a href="/register" className="primary-btn">Report Disaster</a>
          <a href="/login" className="secondary-btn">Login</a>
        </div>

     </section> 



   

      {/* Features */}

      
<section className="features">
  <h2>Platform Features</h2>

  <div className="feature-grid">

    <div className="feature-card">
      <h3>Disaster Reporting</h3>
      <p>
        Citizens can instantly report disasters with precise location,
        description, and optional images to ensure quick response.
      </p>
    </div>

    <div className="feature-card">
      <h3>Admin Monitoring</h3>
      <p>
        Authorities verify incoming reports, prioritize emergencies,
        and coordinate response efforts efficiently.
      </p>
    </div>

    <div className="feature-card">
      <h3>Rescue Team Coordination</h3>
      <p>
        Rescue teams receive assignments, update task status, and
        communicate progress in real time.
      </p>
    </div>

    {/* Added meaningful features */}

    <div className="feature-card">
      <h3>Real-Time Alerts</h3>
      <p>
        Users receive instant alerts about nearby disasters along with
        safety instructions and evacuation guidance.
      </p>
    </div>

    <div className="feature-card">
      <h3>Live Location Tracking</h3>
      <p>
        Track affected areas and ongoing rescue operations to improve
        situational awareness and response planning.
      </p>
    </div>

    <div className="feature-card">
      <h3>Resource Management</h3>
      <p>
        Manage availability of essential resources like medical aid,
        food supplies, and rescue equipment during emergencies.
      </p>
    </div>

  

   

  </div>
</section>

      {/* Emergency Section */}

   

 <section className="emergency">
  <h2>🚨 Emergency Helpline Numbers</h2>

  <p className="emergency-desc">
    In case of any emergency, immediately contact the appropriate service below.
  </p>

  <div className="helpline-grid">

    <div className="helpline-card police">
      <span className="icon">👮</span>
      <h3>Police</h3>
      <p className="number">100</p>
      <a href="tel:100" className="call-btn">Call Now</a>
    </div>

    <div className="helpline-card fire">
      <span className="icon">🔥</span>
      <h3>Fire Brigade</h3>
      <p className="number">101</p>
      <a href="tel:101" className="call-btn">Call Now</a>
    </div>

    <div className="helpline-card ambulance">
      <span className="icon">🚑</span>
      <h3>Ambulance</h3>
      <p className="number">102</p>
      <a href="tel:102" className="call-btn">Call Now</a>
    </div>

    <div className="helpline-card disaster">
      <span className="icon">🌪️</span>
      <h3>Disaster Helpline</h3>
      <p className="number">108</p>
      <a href="tel:108" className="call-btn">Call Now</a>
    </div>

  </div>
</section>

      {/* Footer */}

      {/* <footer className="landing-footer">
        <p>Disaster Management System © 2026</p>
      </footer> */}
<footer className="landing-footer">
  <div className="footer-content">

    <div className="footer-left">
      <h3>Disaster Management</h3>
      <p>Helping people report disasters and get help quickly.</p>
    </div>

    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Report</a></li>
        <li><a href="#">Resources</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact</h4>
      <p>Email: support@dms.com</p>
      <p>Helpline: 108</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Disaster Management System</p>
  </div>
</footer>
    </div>
  );
}

export default Home;