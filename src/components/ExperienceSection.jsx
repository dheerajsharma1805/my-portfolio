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

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Professional Experience</h2>
          <div className="experience-underline"></div>
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              
              <div className="experience-content">
                <div className="experience-header-info">
                  <h3 className="experience-position">{experience.position}</h3>
                  <div className="experience-company">{experience.company}</div>
                  <div className="experience-duration">{experience.duration}</div>
                </div>
                
                <p className="experience-description">{experience.description}</p>
                
                <div className="experience-achievements">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <ul className="achievements-list">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          padding: 4rem 0;
          background: #0c0c0c;
        }

        .experience-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .experience-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .experience-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .experience-timeline {
          position: relative;
          padding-left: 2rem;
        }

        .timeline-line {
          position: absolute;
          left: 1rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #64ffda 0%, #4fc3f7 100%);
        }

        .experience-item {
          position: relative;
          margin-bottom: 3rem;
          background: #1e1e1e;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #333333;
          margin-left: 2rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .experience-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .experience-marker {
          position: absolute;
          left: -2.5rem;
          top: 2rem;
          width: 12px;
          height: 12px;
          background: #64ffda;
          border-radius: 50%;
          border: 3px solid #0c0c0c;
          box-shadow: 0 0 0 2px #64ffda;
        }

        .experience-content {
          color: #a0a0a0;
        }

        .experience-header-info {
          margin-bottom: 1.5rem;
        }

        .experience-position {
          font-size: 1.5rem;
          font-weight: 600;
          color: #64ffda;
          margin-bottom: 0.5rem;
        }

        .experience-company {
          font-size: 1.125rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
          font-weight: 500;
        }

        .experience-duration {
          font-size: 0.875rem;
          color: #666666;
          font-weight: 500;
        }

        .experience-description {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #cccccc;
        }

        .experience-achievements {
          margin-top: 1.5rem;
        }

        .achievements-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievement-item {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.5;
          color: #a0a0a0;
        }

        .achievement-item::before {
          content: '▸';
          color: #64ffda;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .experience-title {
            font-size: 2rem;
          }

          .experience-item {
            padding: 1.75rem;
            margin-left: 1.75rem;
          }

          .experience-position {
            font-size: 1.375rem;
          }

          .experience-company {
            font-size: 1rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .experience-section {
            padding: 3rem 0;
          }

          .experience-container {
            padding: 0 15px;
          }

          .experience-header {
            margin-bottom: 3rem;
          }

          .experience-title {
            font-size: 1.75rem;
          }

          .experience-timeline {
            padding-left: 1.5rem;
          }

          .timeline-line {
            left: 0.75rem;
          }

          .experience-item {
            margin-left: 1.5rem;
            padding: 1.5rem;
            margin-bottom: 2rem;
          }

          .experience-marker {
            left: -2.25rem;
            top: 1.5rem;
            width: 10px;
            height: 10px;
          }

          .experience-position {
            font-size: 1.25rem;
          }

          .experience-company {
            font-size: 0.95rem;
          }

          .experience-description {
            font-size: 0.95rem;
            margin-bottom: 1.25rem;
          }

          .achievements-title {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          .achievement-item {
            font-size: 0.9rem;
            padding-left: 1.25rem;
            margin-bottom: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .experience-section {
            padding: 2rem 0;
          }

          .experience-container {
            padding: 0 10px;
          }

          .experience-header {
            margin-bottom: 2rem;
          }

          .experience-title {
            font-size: 1.5rem;
          }

          .experience-timeline {
            padding-left: 1rem;
          }

          .timeline-line {
            left: 0.5rem;
          }

          .experience-item {
            margin-left: 1rem;
            padding: 1.25rem;
            margin-bottom: 1.5rem;
          }

          .experience-marker {
            left: -1.75rem;
            top: 1.25rem;
            width: 8px;
            height: 8px;
          }

          .experience-position {
            font-size: 1.125rem;
            margin-bottom: 0.25rem;
          }

          .experience-company {
            font-size: 0.9rem;
            margin-bottom: 0.125rem;
          }

          .experience-duration {
            font-size: 0.8rem;
          }

          .experience-description {
            font-size: 0.875rem;
            line-height: 1.5;
            margin-bottom: 1rem;
          }

          .achievements-title {
            font-size: 0.95rem;
            margin-bottom: 0.5rem;
          }

          .achievement-item {
            font-size: 0.85rem;
            padding-left: 1rem;
            margin-bottom: 0.375rem;
            line-height: 1.4;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .experience-timeline {
            padding-left: 0.75rem;
          }

          .timeline-line {
            left: 0.375rem;
          }

          .experience-item {
            margin-left: 0.75rem;
            padding: 1rem;
          }

          .experience-marker {
            left: -1.5rem;
            top: 1rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .experience-item {
            transform: none;
          }

          .experience-item:active {
            transform: translateY(-2px);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .experience-section {
            padding: 2rem 0;
          }

          .experience-header {
            margin-bottom: 2rem;
          }

          .experience-item {
            margin-bottom: 1.5rem;
            padding: 1.25rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .experience-item {
            border-width: 0.5px;
          }

          .timeline-line {
            width: 1px;
          }
        }
      `}</style>
    </section>
  )
}

export default ExperienceSection