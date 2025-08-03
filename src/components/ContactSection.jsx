import React from 'react'

const ContactSection = () => {
  const handleGetInTouch = () => {
    const modal = document.querySelector('.contact-modal')
    if (modal) {
      modal.classList.add('active')
    }
  }

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

  const contentStyle = {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto'
  }

  const descriptionStyle = {
    fontSize: '1.125rem',
    color: '#a0a0a0',
    lineHeight: '1.6',
    marginBottom: '3rem'
  }

  const contactInfoStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
  }

  const contactItemStyle = {
    background: '#2a2a2a',
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #333333',
    transition: 'transform 0.3s ease'
  }

  const contactIconStyle = {
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1rem',
    color: '#0c0c0c',
    fontSize: '1.25rem'
  }

  const contactTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '0.5rem'
  }

  const contactValueStyle = {
    color: '#a0a0a0',
    fontSize: '0.95rem'
  }

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '3rem'
  }

  const socialLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    background: '#2a2a2a',
    borderRadius: '25px',
    textDecoration: 'none',
    color: '#ffffff',
    border: '1px solid #333333',
    transition: 'all 0.3s ease'
  }

  const socialIconStyle = {
    width: '20px',
    height: '20px'
  }

  const ctaButtonStyle = {
    background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
    color: '#0c0c0c',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }

  return (
    <section id="contact" className="section" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Get In Touch</h2>
          <div style={underlineStyle}></div>
        </div>

        <div style={contentStyle}>
          <p style={descriptionStyle}>
            I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
            Whether you have a project in mind, want to discuss technology, or just want to say hello, 
            I'd love to hear from you!
          </p>

          <div style={contactInfoStyle}>
            <div 
              style={contactItemStyle}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={contactIconStyle}>📧</div>
              <h3 style={contactTitleStyle}>Email</h3>
              <p style={contactValueStyle}>dheerajsharma2709@gmail.com</p>
            </div>

            <div 
              style={contactItemStyle}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={contactIconStyle}>📱</div>
              <h3 style={contactTitleStyle}>Phone</h3>
              <p style={contactValueStyle}>+91 (934) 027 5586</p>
            </div>

            <div 
              style={contactItemStyle}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <div style={contactIconStyle}>📍</div>
              <h3 style={contactTitleStyle}>Location</h3>
              <p style={contactValueStyle}>Burhar, Madhya Pradesh, India</p>
            </div>
          </div>

          <div style={socialLinksStyle}>
            <a 
              href="https://www.linkedin.com/in/dheeraj-sharma-2b2053162/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseEnter={(e) => {
                e.target.style.background = '#0077B5'
                e.target.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#2a2a2a'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              <svg style={socialIconStyle} fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <a 
              href="https://github.com/dheerajsharma1805" 
              target="_blank" 
              rel="noopener noreferrer"
              style={socialLinkStyle}
              onMouseEnter={(e) => {
                e.target.style.background = '#333'
                e.target.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#2a2a2a'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              <svg style={socialIconStyle} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          <button 
            style={ctaButtonStyle}
            onClick={handleGetInTouch}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'none'
            }}
          >
            Send Message
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-info {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }

          .social-links {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
          }

          .social-link {
            width: 200px !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ContactSection