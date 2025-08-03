import React from 'react'

const ExperienceSection = () => {
  const experiences = [
    {
      position: "Senior Software Engineer",
      company: "Inmorphis Services Private Limited",
      duration: "Jan 2025 - Present",
      description: "Specialization in ServiceNow platform focusing on Customer Service Management module. Certified System Administrator (CSA).",
      achievements: [
        "ServiceNow Customer Service Management module expertise",
        "Certified System Administrator (CSA) certification",
        "Platform customization and workflow optimization",
        "Client requirement analysis and solution design"
      ]
    },
    {
      position: "Software Developer",
      company: "Newput Infotech, Indore, Madhya Pradesh",
      duration: "Oct 2022 - Dec 2024",
      description: "Full-stack development with focus on React.js, Node.js, and various modern web technologies.",
      achievements: [
        "Implemented email notification system using Amazon SQS, reducing processing time by 30%",
        "Developed micropayments platform with React and Redux, achieving 30% reduction in load times",
        "Built robust APIs using Node.js for invoice management and financial operations",
        "Created real-time chat system with WebSocket integration and Redis for scalability",
        "Led browser wallet extension development, reducing build times by 40%",
        "Optimized JavaScript SDK implementation, reducing execution time by 35%",
        "Developed Next.js 13 parking application with 30% load time improvement",
        "Managed transactional operations for USD, USDC, cryptocurrencies, and NFTs",
        "Successfully resolved over 650 customer JIRA issues across multiple products"
      ]
    },
    {
      position: "Software Developer - Trainee",
      company: "Newput Infotech, Indore, Madhya Pradesh",
      duration: "April 2022 - Oct 2022",
      description: "Comprehensive training and skill development in modern web technologies.",
      achievements: [
        "Completed comprehensive MERN stack training with full proficiency",
        "Acquired expertise in Node.js, Express, Redis, Docker, and database technologies",
        "Mastered frontend technologies including React, Redux, and Next.js",
        "Developed strong foundation in modern web development practices"
      ]
    }
  ]

  const sectionStyle = {
    padding: '4rem 0',
    background: '#0c0c0c'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
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

  const timelineStyle = {
    position: 'relative',
    paddingLeft: '2rem'
  }

  const timelineLineStyle = {
    position: 'absolute',
    left: '1rem',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(180deg, #64ffda 0%, #4fc3f7 100%)'
  }

  const experienceItemStyle = {
    position: 'relative',
    marginBottom: '3rem',
    background: '#1e1e1e',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #333333',
    marginLeft: '2rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }

  const dotStyle = {
    position: 'absolute',
    left: '-3.5rem',
    top: '2rem',
    width: '12px',
    height: '12px',
    background: '#64ffda',
    borderRadius: '50%',
    border: '3px solid #0c0c0c'
  }

  const positionStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#64ffda',
    marginBottom: '0.5rem'
  }

  const companyStyle = {
    fontSize: '1.125rem',
    color: '#ffffff',
    marginBottom: '0.5rem'
  }

  const durationStyle = {
    fontSize: '0.875rem',
    color: '#4fc3f7',
    marginBottom: '1rem',
    fontWeight: '500'
  }

  const descriptionStyle = {
    color: '#a0a0a0',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  }

  const achievementsStyle = {
    listStyleType: 'none',
    padding: 0
  }

  const achievementItemStyle = {
    position: 'relative',
    paddingLeft: '1.5rem',
    marginBottom: '0.75rem',
    color: '#a0a0a0',
    lineHeight: '1.5'
  }

  const bulletStyle = {
    position: 'absolute',
    left: '0',
    top: '0.5rem',
    width: '6px',
    height: '6px',
    background: '#64ffda',
    borderRadius: '50%'
  }

  return (
    <section id="experience" className="section" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Professional Experience</h2>
          <div style={underlineStyle}></div>
        </div>

        <div style={timelineStyle}>
          <div style={timelineLineStyle}></div>

          {experiences.map((exp, index) => (
            <div 
              key={index} 
              style={experienceItemStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)'
                e.target.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <div style={dotStyle}></div>

              <h3 style={positionStyle}>{exp.position}</h3>
              <h4 style={companyStyle}>{exp.company}</h4>
              <p style={durationStyle}>{exp.duration}</p>
              <p style={descriptionStyle}>{exp.description}</p>

              <ul style={achievementsStyle}>
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} style={achievementItemStyle}>
                    <div style={bulletStyle}></div>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .timeline {
            padding-left: 1rem !important;
          }

          .timeline-line {
            left: 0.5rem !important;
          }

          .experience-item {
            margin-left: 1rem !important;
            padding: 1.5rem !important;
          }

          .dot {
            left: -2.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .timeline {
            padding-left: 0 !important;
          }

          .timeline-line {
            display: none !important;
          }

          .experience-item {
            margin-left: 0 !important;
          }

          .dot {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ExperienceSection