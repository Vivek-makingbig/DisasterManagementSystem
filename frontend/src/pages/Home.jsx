import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <div className="landing">

      {/* Navbar */}

      <nav className="navbar">
        <h2>Disaster Response System</h2>

        <div className="nav-links">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>
      </nav>


      {/* Hero Section */}

      <section className="hero">

        <h1>Report Disasters. Save Lives.</h1>

        <p>
          A platform where citizens can report disasters and rescue teams
          respond quickly to emergencies.
        </p>

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
            <p>Citizens can instantly report disasters with location and description.</p>
          </div>

          <div className="feature-card">
            <h3>Admin Monitoring</h3>
            <p>Authorities verify reports and coordinate rescue operations.</p>
          </div>

          <div className="feature-card">
            <h3>Rescue Team Coordination</h3>
            <p>Rescue teams receive assignments and update rescue progress.</p>
          </div>

        </div>

      </section>


      {/* Emergency Section */}

      <section className="emergency">

        <h2>Emergency Helpline Numbers</h2>

        <div className="helpline-grid">

          <div>Police - 100</div>
          <div>Fire - 101</div>
          <div>Ambulance - 102</div>
          <div>Disaster Helpline - 108</div>

        </div>

      </section>


      {/* Footer */}

      <footer className="landing-footer">
        <p>Disaster Management System © 2026</p>
      </footer>

    </div>
  );
}

export default Home;