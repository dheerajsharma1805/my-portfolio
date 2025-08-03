import React from 'react'

const ProjectsSection = () => {
  const projects = [
    {
      name: "Paytm Wallet Web Application",
      description: "Spearheaded the development of a web application akin to Paytm Wallet, employing React.js for frontend, Node.js (Express.js) for backend, and MongoDB for database management. Utilized Zod for robust validation and Tailwind CSS for sleek styling.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Zod", "Tailwind CSS"],
      github: "https://github.com/dheerajsharma1805/paytm",
      features: [
        "Digital wallet functionality",
        "Secure payment processing",
        "User authentication and authorization",
        "Transaction history tracking",
        "Responsive mobile-first design"
      ]
    },
    {
      name: "Medium Blog Clone",
      description: "Engineered a clone of the popular Medium blogging platform, utilizing React for frontend and implementing a serverless backend on Cloudflare. Features modern UI/UX design with smooth animations and responsive layout.",
      technologies: ["React", "Cloudflare", "Serverless", "CSS3", "JavaScript"],
      github: "https://github.com/dheerajsharma1805/medium_blog",
      features: [
        "Article creation and publishing",
        "Rich text editor with formatting",
        "User profiles and following system",
        "Comment and interaction system",
        "Serverless architecture deployment"
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

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
    gap: '3rem'
  }

  const projectCardStyle = {
    background: '#1e1e1e',
    borderRadius: '12px',
    padding: '2.5rem',
    border: '1px solid #333333',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  }

  const projectNameStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#64ffda',
    marginBottom: '1rem'
  }

  const projectDescriptionStyle = {
    color: '#a0a0a0',
    lineHeight: '1.6',
    marginBottom: '1.5rem'
  }

  const featuresStyle = {
    marginBottom: '2rem'
  }

  const featuresTitleStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1rem'
  }

  const featuresListStyle = {
    listStyleType: 'none',
    padding: 0
  }

  const featureItemStyle = {
    position: 'relative',
    paddingLeft: '1.5rem',
    marginBottom: '0.5rem',
    color: '#a0a0a0',
    lineHeight: '1.5'
  }

  const featureBulletStyle = {
    position: 'absolute',
    left: '0',
    top: '0.5rem',
    width: '6px',
    height: '6px',
    background: '#64ffda',
    borderRadius: '50%'
  }

  const techStackStyle = {
    marginBottom: '2rem'
  }

  const techTitleStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '1rem'
  }

  const techTagsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem'
  }

  const techTagStyle = {
    background: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    padding: '0.25rem 0.75rem',
    borderRadius: '15px',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: '1px solid rgba(100, 255, 218, 0.2)'
  }

  const projectLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
    color: '#0c0c0c',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  }

  const githubIconStyle = {
    width: '20px',
    height: '20px'
  }

  return (
    <section id="projects" className="section" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Featured Projects</h2>
          <div style={underlineStyle}></div>
        </div>

        <div style={projectsGridStyle}>
          {projects.map((project, index) => (
            <div 
              key={index} 
              style={projectCardStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-10px)'
                e.target.style.boxShadow = '0 20px 40px rgba(100, 255, 218, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              <h3 style={projectNameStyle}>{project.name}</h3>
              <p style={projectDescriptionStyle}>{project.description}</p>

              <div style={featuresStyle}>
                <h4 style={featuresTitleStyle}>Key Features:</h4>
                <ul style={featuresListStyle}>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={featureItemStyle}>
                      <div style={featureBulletStyle}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={techStackStyle}>
                <h4 style={techTitleStyle}>Technologies Used:</h4>
                <div style={techTagsStyle}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} style={techTagStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                style={projectLinkStyle}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                <svg style={githubIconStyle} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .project-card {
            padding: 2rem !important;
          }

          .tech-tags {
            gap: 0.4rem !important;
          }

          .tech-tag {
            font-size: 0.8rem !important;
            padding: 0.2rem 0.6rem !important;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }

          .project-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection