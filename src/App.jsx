import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <div className="logo">Bass</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#customers">Customers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Innovating Automation for the Future of Business</h1>
          <p>Byte Automation Solutions Studio (Bass) is dedicated to creating intelligent, B2B automation solutions by creatively applying emerging technologies like AI, Machine Learning, Robotics, and beyond.</p>
          <button className="cta-button">Discover Our Approach</button> {/* Changed text */}
        </div>
      </section>

      <section id="projects" className="projects"> {/* Renamed section slightly conceptually */}
        <div className="projects-inner">
          <h2>Our Innovation Pipeline</h2> {/* Changed title */}
          {/* Optional intro text */}
          <p>We are in the ideation phase, actively exploring and developing concepts that leverage cutting-edge technologies to solve real-world business problems.</p> 
          
          <div className="project-grid"> {/* These cards now represent areas of focus/exploration */}
            <div className="project-card">
              <h3>Intelligent Automation (AI & ML)</h3> {/* Changed title */}
              <p>Harnessing Artificial Intelligence and Machine Learning to build smart, adaptable systems that optimize processes and provide predictive insights.</p> {/* Changed text */}
            </div>
            <div className="project-card">
              <h3>Integrated Systems & Robotics</h3> {/* Changed title */}
              <p>Exploring the application of drones, IoT devices, and robotics to automate physical tasks and connect complex operational systems.</p> {/* Changed text */}
            </div>
            <div className="project-card">
              <h3>Creative Tech Exploration</h3> {/* Changed title */}
              <p>Investigating novel uses of emerging technologies and unique data streams, applying creative problem-solving to uncover entirely new automation possibilities.</p> {/* Changed text */}
            </div>
          </div>
        </div>
      </section>

      <section id="customers" className="customers"> {/* Renamed section slightly conceptually */}
        <div className="customers-inner">
          <h2>Partnering for Future Success</h2> {/* Changed title */}
           {/* Optional intro text */}
          <p>We are seeking forward-thinking businesses ready to collaborate on developing innovative automation solutions that address their specific challenges and drive future growth.</p>

          <div className="customer-grid"> {/* These cards now represent types of partners/challenges */}
            <div className="customer-card">
              <h3>Efficiency Seekers</h3> {/* Changed title */}
              <p>For companies aiming to significantly improve operational efficiency and reduce costs through intelligent, tailored automation.</p> {/* Changed text */}
            </div>
            <div className="customer-card">
              <h3>Innovation Leaders</h3> {/* Changed title */}
              <p>For organizations eager to adopt and implement cutting-edge technologies to stay ahead of the curve and redefine their industry.</p> {/* Changed text */}
            </div>
            <div className="customer-card">
              <h3>Solvers of Complex Problems</h3> {/* Changed title */}
              <p>For businesses with unique, challenging automation needs that require a creative and technically advanced approach to overcome.</p> {/* Changed text */}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>Email: info@bass.sa</p>
            <p>Phone: (055) 123-4567</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/bass">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Location</h4>
            <p>King Fahad National Library</p>
            <p>Riyadh, Saudi Arabia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Bass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
