import React from 'react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java"]
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "Redux", "Recoil", "Next.js", "Material-UI", "Tailwind CSS"]
    },
    {
      title: "Backend Technologies", 
      skills: ["Node.js", "Express.js", "WebSockets", "WebRTC", "gRPC", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "SQL", "Redis"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS EC2", "Git", "Webpack", "CI/CD", "JIRA"]
    },
    {
      title: "ServiceNow",
      skills: ["Customer Service Management", "System Administration", "CSA Certified", "Platform Customization"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Prisma", "Yup", "Zod", "Worker.js", "Hono"]
    }
  ]

  const sectionStyle = {
    padding: '4rem 0',
    background: '#1e1e1e'
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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem'
  }

  const categoryStyle = {
    background: '#2a2a2a',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #333333',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }

  const categoryTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#64ffda',
    marginBottom: '1.5rem',
    textAlign: 'center'
  }

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '0.75rem'
  }

  const skillTagStyle = {
    background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(79, 195, 247, 0.1) 100%)',
    color: '#ffffff',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
    fontWeight: '500',
    textAlign: 'center',
    border: '1px solid rgba(100, 255, 218, 0.2)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  return (
    <section id="skills" className="section" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Technical Skills</h2>
          <div style={underlineStyle}></div>
        </div>

        <div style={gridStyle}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              style={categoryStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)'
                e.target.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <h3 style={categoryTitleStyle}>{category.title}</h3>
              <div style={skillsGridStyle}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    style={skillTagStyle}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(79, 195, 247, 0.2) 100%)'
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.5)'
                      e.target.style.transform = 'scale(1.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(79, 195, 247, 0.1) 100%)'
                      e.target.style.borderColor = 'rgba(100, 255, 218, 0.2)'
                      e.target.style.transform = 'scale(1)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .skills-category {
            padding: 1.5rem !important;
          }

          .skills-tags {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) !important;
            gap: 0.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .skills-tags {
            grid-template-columns: 1fr 1fr !important;
          }

          .skill-tag {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default SkillsSection