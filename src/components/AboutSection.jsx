import React from 'react'

const AboutSection = () => {
  const sectionStyle = {
    padding: '4rem 0',
    background: '#1e1e1e'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  }

  const contentStyle = {
    maxWidth: '1000px',
    margin: '0 auto'
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '4rem'
  }

  const titleStyle = {
    fontSize: '2.25rem',
    marginBottom: '1rem'
  }

  const underlineStyle = {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
    margin: '0 auto',
    borderRadius: '2px'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '4rem',
    alignItems: 'start'
  }

  const textStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.7'
  }

  const introStyle = {
    fontSize: '1.25rem',
    color: '#ffffff',
    marginBottom: '2rem'
  }

  const highlightsStyle = {
    display: 'grid',
    gap: '1.5rem',
    marginTop: '3rem'
  }

  const highlightItemStyle = {
    padding: '1rem 0'
  }

  const highlightTitleStyle = {
    color: '#64ffda',
    marginBottom: '0.5rem'
  }

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem'
  }

  const statItemStyle = {
    textAlign: 'center',
    padding: '2rem',
    background: '#2a2a2a',
    borderRadius: '12px',
    border: '1px solid #333333',
    transition: 'transform 0.3s ease'
  }

  const statNumberStyle = {
    display: 'block',
    fontSize: '1.875rem',
    fontWeight: '700',
    color: '#64ffda',
    marginBottom: '0.5rem'
  }

  const statLabelStyle = {
    fontSize: '0.875rem',
    color: '#a0a0a0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  return (
    <section id="about" className="section" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={headerStyle}>
            <h2 style={titleStyle}>About Me</h2>
            <div style={underlineStyle}></div>
          </div>

          <div style={gridStyle}>
            <div style={textStyle}>
              <p style={introStyle}>
                Hello! I'm Dheeraj Sharma, a passionate Senior Software Engineer with a 
                unique journey from Mechanical Engineering to the world of software development.
              </p>

              <p>
                I graduated with a B.Tech in Mechanical Engineering from Shri G.S. Institute 
                of Technology and Science, Indore in 2021. However, my curiosity for technology 
                and problem-solving led me to transition into software development, where I 
                discovered my true passion.
              </p>

              <p>
                Currently, I specialize in the ServiceNow platform, particularly in Customer 
                Service Management modules, and hold a Certified System Administrator (CSA) 
                certification. My experience spans across modern web technologies including 
                React.js, Node.js, and various cloud platforms.
              </p>

              <div style={highlightsStyle}>
                <div style={highlightItemStyle}>
                  <h4 style={highlightTitleStyle}>Problem Solver</h4>
                  <p>Love tackling complex challenges and finding innovative solutions</p>
                </div>
                <div style={highlightItemStyle}>
                  <h4 style={highlightTitleStyle}>Continuous Learner</h4>
                  <p>Always exploring new technologies and improving my skillset</p>
                </div>
                <div style={highlightItemStyle}>
                  <h4 style={highlightTitleStyle}>Team Player</h4>
                  <p>Collaborative approach to development and knowledge sharing</p>
                </div>
              </div>
            </div>

            <div style={statsStyle}>
              <div 
                style={statItemStyle}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <span style={statNumberStyle}>3+</span>
                <span style={statLabelStyle}>Years Experience</span>
              </div>
              <div 
                style={statItemStyle}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <span style={statNumberStyle}>650+</span>
                <span style={statLabelStyle}>Issues Resolved</span>
              </div>
              <div 
                style={statItemStyle}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <span style={statNumberStyle}>15+</span>
                <span style={statLabelStyle}>Technologies</span>
              </div>
              <div 
                style={statItemStyle}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
              >
                <span style={statNumberStyle}>100%</span>
                <span style={statLabelStyle}>Dedication</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .about-stats {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem !important;
          }

          .stat-item {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .about-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutSection