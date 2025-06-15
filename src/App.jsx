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
          <h1>Bass is an Amazing Company</h1>
          <p>Innovating the future, one project at a time</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="projects-inner">
          <h2>Our Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Project One</h3>
              <p>Revolutionary innovation in technology</p>
            </div>
            <div className="project-card">
              <h3>Project Two</h3>
              <p>Breaking new ground in design</p>
            </div>
            <div className="project-card">
              <h3>Project Three</h3>
              <p>Leading the way in sustainability</p>
            </div>
          </div>
        </div>
      </section>

      <section id="customers" className="customers">
        <div className="customers-inner">
          <h2>Our Valued Customers</h2>
          <div className="customer-grid">
            <div className="customer-card">
              <h3>Enterprise Solutions</h3>
              <p>Trusted by Fortune 500 companies</p>
            </div>
            <div className="customer-card">
              <h3>Startup Partners</h3>
              <p>Empowering the next generation</p>
            </div>
            <div className="customer-card">
              <h3>Global Reach</h3>
              <p>Serving clients worldwide</p>
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
