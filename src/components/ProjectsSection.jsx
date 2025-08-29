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

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <div className="projects-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4 className="features-title">Key Features:</h4>
                <ul className="features-list">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4 className="technologies-title">Technologies Used:</h4>
                <div className="technologies-grid">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="technology-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 4rem 0;
          background: #0c0c0c;
        }

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .projects-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .projects-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 3rem;
        }

        .project-card {
          background: #1e1e1e;
          border-radius: 12px;
          padding: 2.5rem;
          border: 1px solid #333333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .project-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #64ffda;
          margin-bottom: 1rem;
        }

        .project-description {
          color: #a0a0a0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .project-features {
          margin-bottom: 2rem;
        }

        .features-title {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          color: #a0a0a0;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .feature-item::before {
          content: '▸';
          color: #64ffda;
          position: absolute;
          left: 0;
        }

        .project-technologies {
          margin-bottom: 2rem;
        }

        .technologies-title {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .technologies-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .technology-tag {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(79, 195, 247, 0.1) 100%);
          color: #64ffda;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          border: 1px solid rgba(100, 255, 218, 0.2);
        }

        .project-actions {
          text-align: center;
        }

        .project-link {
          display: inline-block;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          color: #0c0c0c;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
            gap: 2rem;
          }

          .project-card {
            padding: 2rem;
          }

          .projects-title {
            font-size: 2rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .projects-section {
            padding: 3rem 0;
          }

          .projects-container {
            padding: 0 15px;
          }

          .projects-header {
            margin-bottom: 3rem;
          }

          .projects-title {
            font-size: 1.75rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .project-name {
            font-size: 1.25rem;
          }

          .project-description {
            font-size: 0.95rem;
          }

          .features-title,
          .technologies-title {
            font-size: 0.95rem;
          }

          .feature-item {
            font-size: 0.9rem;
            padding-left: 1.25rem;
          }

          .technology-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .project-link {
            width: 100%;
            text-align: center;
            padding: 14px 24px;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 2rem 0;
          }

          .projects-container {
            padding: 0 10px;
          }

          .projects-header {
            margin-bottom: 2rem;
          }

          .projects-title {
            font-size: 1.5rem;
          }

          .projects-grid {
            gap: 1.5rem;
          }

          .project-card {
            padding: 1.25rem;
          }

          .project-name {
            font-size: 1.125rem;
          }

          .project-description {
            font-size: 0.875rem;
            line-height: 1.5;
          }

          .feature-item {
            font-size: 0.85rem;
            padding-left: 1rem;
          }

          .technology-tag {
            font-size: 0.75rem;
            padding: 0.35rem 0.7rem;
          }

          .project-link {
            padding: 12px 20px;
            font-size: 0.9rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .project-card {
            transform: none;
          }

          .project-card:active {
            transform: translateY(-2px);
          }

          .project-link {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .projects-section {
            padding: 2rem 0;
          }

          .projects-header {
            margin-bottom: 2rem;
          }

          .projects-grid {
            gap: 1.5rem;
          }

          .project-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection