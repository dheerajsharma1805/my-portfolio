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

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills & Expertise</h2>
          <div className="skills-underline"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid-inner">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 4rem 0;
          background: #1e1e1e;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .skills-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .skills-title {
          font-size: 2.25rem;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .skills-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          margin: 0 auto;
          border-radius: 2px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: #2a2a2a;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #333333;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.1);
        }

        .category-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #64ffda;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .skills-grid-inner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
        }

        .skill-tag {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.1) 0%, rgba(79, 195, 247, 0.1) 100%);
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          text-align: center;
          border: 1px solid rgba(100, 255, 218, 0.2);
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(79, 195, 247, 0.2) 100%);
          border-color: rgba(100, 255, 218, 0.4);
          transform: translateY(-2px);
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
          }

          .skill-category {
            padding: 1.75rem;
          }

          .skills-title {
            font-size: 2rem;
          }

          .category-title {
            font-size: 1.125rem;
          }

          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            gap: 0.6rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .skills-section {
            padding: 3rem 0;
          }

          .skills-container {
            padding: 0 15px;
          }

          .skills-header {
            margin-bottom: 3rem;
          }

          .skills-title {
            font-size: 1.75rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .skill-category {
            padding: 1.5rem;
          }

          .category-title {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
          }

          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 0.5rem;
          }

          .skill-tag {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .skills-section {
            padding: 2rem 0;
          }

          .skills-container {
            padding: 0 10px;
          }

          .skills-header {
            margin-bottom: 2rem;
          }

          .skills-title {
            font-size: 1.5rem;
          }

          .skills-grid {
            gap: 1.25rem;
          }

          .skill-category {
            padding: 1.25rem;
          }

          .category-title {
            font-size: 1rem;
            margin-bottom: 1rem;
          }

          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
            gap: 0.4rem;
          }

          .skill-tag {
            font-size: 0.75rem;
            padding: 0.35rem 0.7rem;
            border-radius: 15px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .skills-grid-inner {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 0.3rem;
          }

          .skill-tag {
            font-size: 0.7rem;
            padding: 0.3rem 0.6rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .skill-category {
            transform: none;
          }

          .skill-category:active {
            transform: translateY(-2px);
          }

          .skill-tag {
            min-height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .skill-tag:active {
            transform: translateY(-1px);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .skills-section {
            padding: 2rem 0;
          }

          .skills-header {
            margin-bottom: 2rem;
          }

          .skills-grid {
            gap: 1.25rem;
          }

          .skill-category {
            padding: 1.25rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .skill-tag {
            border-width: 0.5px;
          }
        }
      `}</style>
    </section>
  )
}

export default SkillsSection