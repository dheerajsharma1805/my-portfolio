import React, { useEffect, useRef } from 'react'

const HeroSection = () => {
  const waveRef = useRef(null)

  useEffect(() => {
    let animationId
    let phase = 0

    const animateWave = () => {
      if (waveRef.current) {
        phase += 0.02
        const wave1 = waveRef.current.querySelector('.wave-path-1')
        const wave2 = waveRef.current.querySelector('.wave-path-2')

        if (wave1 && wave2) {
          wave1.style.transform = `translateX(${Math.sin(phase) * 10}px)`
          wave2.style.transform = `translateX(${Math.sin(phase + 1) * 15}px)`
        }
      }
      animationId = requestAnimationFrame(animateWave)
    }

    animateWave()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  const handleGetInTouch = () => {
    // Dispatch custom event to open contact modal
    const event = new CustomEvent('openContactModal')
    document.dispatchEvent(event)
  }

  const sectionStyle = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1e1e1e 50%, #0f1419 100%)'
  }

  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  }

  const waveContainerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  }

  const waveStyle = {
    width: '100%',
    height: '100%',
    fill: 'rgba(100, 255, 218, 0.1)'
  }

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    padding: '4rem 0'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  }

  const textStyle = {
    maxWidth: '800px',
    textAlign: 'center',
    margin: '0 auto'
  }

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
    animation: 'fadeInUp 0.8s ease-out forwards'
  }

  const subtitleStyle = {
    fontSize: '1.5rem',
    color: '#4fc3f7',
    marginBottom: '2rem',
    fontWeight: '500',
    animation: 'fadeInUp 0.8s ease-out forwards',
    animationDelay: '0.2s',
    opacity: 0,
    animationFillMode: 'forwards'
  }

  const descriptionStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    marginBottom: '3rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    animation: 'fadeInUp 0.8s ease-out forwards',
    animationDelay: '0.4s',
    opacity: 0,
    animationFillMode: 'forwards'
  }

  const actionsStyle = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    animation: 'fadeInUp 0.8s ease-out forwards',
    animationDelay: '0.6s',
    opacity: 0,
    animationFillMode: 'forwards'
  }

  const btnPrimaryStyle = {
    background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
    color: '#0c0c0c',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  }

  const btnSecondaryStyle = {
    background: 'transparent',
    color: '#64ffda',
    border: '2px solid #64ffda',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  }

  return (
    <section id="hero" style={sectionStyle}>
      <div style={backgroundStyle}>
        <div style={waveContainerStyle} ref={waveRef}>
          <svg style={waveStyle} viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              className="wave-path-1"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity="0.25"
              style={{transition: 'transform 0.1s ease-out'}}
            />
            <path 
              className="wave-path-2"
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity="0.5"
              style={{transition: 'transform 0.1s ease-out'}}
            />
          </svg>
        </div>
      </div>

      <div style={contentStyle}>
        <div style={containerStyle}>
          <div style={textStyle}>
            <h1 style={titleStyle}>
              Hi, I'm <span className="text-gradient">Dheeraj Sharma</span>
            </h1>
            <h2 style={subtitleStyle}>Senior Software Engineer</h2>
            <p style={descriptionStyle}>
              Specializing in ServiceNow platform and modern web development. 
              Passionate about creating innovative solutions that drive business value 
              and enhance user experiences.
            </p>
            <div style={actionsStyle}>
              <button 
                style={btnPrimaryStyle}
                onClick={handleGetInTouch}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                Get In Touch
              </button>
              <a 
                href="#projects" 
                style={btnSecondaryStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = '#64ffda'
                  e.target.style.color = '#0c0c0c'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 0 20px rgba(100, 255, 218, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent'
                  e.target.style.color = '#64ffda'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }}
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-text {
            padding: 0 1.5rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 200px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 90vh;
          }

          .wave-container {
            height: 120px;
          }
        }
      `}</style>
    </section>
  )
}

export default HeroSection