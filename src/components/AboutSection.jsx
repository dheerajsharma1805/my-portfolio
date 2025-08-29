import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="about-title">About Me</h2>
            <div className="about-underline"></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="about-intro">
                I'm a passionate Senior Software Engineer with expertise in modern web technologies 
                and the ServiceNow platform. With over 2+ years of experience, I've developed 
                scalable solutions that drive business value and enhance user experiences.
              </p>
              
              <p className="about-description">
                My journey in software development began with a strong foundation in the MERN stack, 
                and I've since expanded my expertise to include ServiceNow platform development, 
                where I'm a Certified System Administrator (CSA). I specialize in creating robust, 
                scalable applications that solve real-world problems.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <h3 className="highlight-title">Problem Solver</h3>
                  <p>I approach challenges with analytical thinking and creative solutions, 
                  ensuring optimal performance and user experience.</p>
                </div>
                
                <div className="highlight-item">
                  <h3 className="highlight-title">Continuous Learner</h3>
                  <p>Always staying updated with the latest technologies and best practices 
                  in software development and ServiceNow platform.</p>
                </div>
                
                <div className="highlight-item">
                  <h3 className="highlight-title">Team Player</h3>
                  <p>Collaborating effectively with cross-functional teams to deliver 
                  high-quality solutions that meet business objectives.</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">650+</span>
                  <span className="stat-label">Issues Resolved</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">CSA</span>
                  <span className="stat-label">ServiceNow Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 4rem 0;
          background: #1e1e1e;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .about-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .about-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text {
          font-size: 1.125rem;
          line-height: 1.7;
        }

        .about-intro {
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .about-description {
          color: #a0a0a0;
          margin-bottom: 2rem;
        }

        .about-highlights {
          display: grid;
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .highlight-item {
          padding: 1rem 0;
        }

        .highlight-title {
          color: #64ffda;
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
        }

        .about-stats {
          position: sticky;
          top: 100px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 2rem;
          background: #2a2a2a;
          border-radius: 12px;
          border: 1px solid #333333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .stat-number {
          display: block;
          font-size: 1.875rem;
          font-weight: 700;
          color: #64ffda;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #a0a0a0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .about-grid {
            gap: 3rem;
          }

          .about-title {
            font-size: 2rem;
          }

          .about-intro {
            font-size: 1.125rem;
          }

          .stats-grid {
            gap: 1.5rem;
          }

          .stat-item {
            padding: 1.75rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .about-section {
            padding: 3rem 0;
          }

          .about-container {
            padding: 0 15px;
          }

          .about-header {
            margin-bottom: 3rem;
          }

          .about-title {
            font-size: 1.75rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-text {
            font-size: 1rem;
            line-height: 1.6;
          }

          .about-intro {
            font-size: 1.125rem;
            margin-bottom: 1.5rem;
          }

          .about-description {
            margin-bottom: 1.5rem;
          }

          .about-highlights {
            margin-top: 2rem;
            gap: 1.25rem;
          }

          .highlight-item {
            padding: 0.75rem 0;
          }

          .highlight-title {
            font-size: 1rem;
          }

          .about-stats {
            position: static;
            order: -1;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-item {
            padding: 1.5rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .stat-label {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 2rem 0;
          }

          .about-container {
            padding: 0 10px;
          }

          .about-header {
            margin-bottom: 2rem;
          }

          .about-title {
            font-size: 1.5rem;
          }

          .about-grid {
            gap: 1.5rem;
          }

          .about-text {
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .about-intro {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .about-description {
            margin-bottom: 1rem;
          }

          .about-highlights {
            margin-top: 1.5rem;
            gap: 1rem;
          }

          .highlight-item {
            padding: 0.5rem 0;
          }

          .highlight-title {
            font-size: 0.95rem;
          }

          .stats-grid {
            gap: 0.75rem;
          }

          .stat-item {
            padding: 1.25rem;
          }

          .stat-number {
            font-size: 1.25rem;
          }

          .stat-label {
            font-size: 0.75rem;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .stat-item {
            padding: 1rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .stat-item {
            transform: none;
          }

          .stat-item:active {
            transform: translateY(-2px);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .about-section {
            padding: 2rem 0;
          }

          .about-header {
            margin-bottom: 2rem;
          }

          .about-grid {
            gap: 1.5rem;
          }

          .about-highlights {
            margin-top: 1.5rem;
            gap: 1rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .stat-item {
            border-width: 0.5px;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection