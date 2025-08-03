import React, { useEffect, useRef } from 'react'

const StarryCursor = () => {
  const cursorRef = useRef(null)
  const trailRef = useRef(null)
  const starsRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    const starsContainer = starsRef.current

    if (!cursor || !trail || !starsContainer) return

    let cursorPos = { x: 0, y: 0 }
    let trailPos = { x: 0, y: 0 }

    // Create stars
    const createStars = () => {
      const numStars = 150
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        star.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: #64ffda;
          border-radius: 50%;
          opacity: ${Math.random() * 0.8 + 0.2};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: twinkle ${Math.random() * 3 + 2}s infinite alternate;
          box-shadow: 0 0 6px #64ffda;
        `
        starsContainer.appendChild(star)
      }
    }

    // Mouse move handler
    const handleMouseMove = (e) => {
      cursorPos.x = e.clientX
      cursorPos.y = e.clientY

      cursor.style.left = cursorPos.x + 'px'
      cursor.style.top = cursorPos.y + 'px'
    }

    // Animate trail
    const animateTrail = () => {
      trailPos.x += (cursorPos.x - trailPos.x) * 0.1
      trailPos.y += (cursorPos.y - trailPos.y) * 0.1

      trail.style.left = trailPos.x + 'px'
      trail.style.top = trailPos.y + 'px'

      requestAnimationFrame(animateTrail)
    }

    // Add hover effects
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll('a, button, .card, .skill-tag, .project-card')

      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.style.transform = 'scale(1.5)'
          trail.style.transform = 'scale(1.3)'
          cursor.style.background = 'rgba(100, 255, 218, 0.8)'
          trail.style.background = 'rgba(79, 195, 247, 0.3)'
        })

        element.addEventListener('mouseleave', () => {
          cursor.style.transform = 'scale(1)'
          trail.style.transform = 'scale(1)'
          cursor.style.background = 'rgba(100, 255, 218, 0.6)'
          trail.style.background = 'rgba(100, 255, 218, 0.2)'
        })
      })
    }

    // Initialize
    document.body.style.cursor = 'none'
    createStars()
    document.addEventListener('mousemove', handleMouseMove)
    animateTrail()

    // Add hover effects with a slight delay to ensure all elements are loaded
    setTimeout(addHoverEffects, 1000)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.body.style.cursor = 'auto'
    }
  }, [])

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 9998
  }

  const starsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }

  const cursorStyle = {
    position: 'fixed',
    width: '10px',
    height: '10px',
    background: 'rgba(100, 255, 218, 0.6)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.1s ease, background 0.3s ease',
    boxShadow: '0 0 20px rgba(100, 255, 218, 0.5)'
  }

  const trailStyle = {
    position: 'fixed',
    width: '30px',
    height: '30px',
    background: 'rgba(100, 255, 218, 0.2)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.3s ease, background 0.3s ease',
    border: '1px solid rgba(100, 255, 218, 0.3)'
  }

  return (
    <div style={containerStyle}>
      <div ref={starsRef} style={starsStyle}></div>
      <div ref={trailRef} style={trailStyle}></div>
      <div ref={cursorRef} style={cursorStyle}></div>

      <style jsx>{`
        @keyframes twinkle {
          0% { 
            opacity: 0.2;
            transform: scale(1);
          }
          100% { 
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @media (max-width: 768px) {
          .cursor-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default StarryCursor