import React, { useEffect, useRef } from 'react'

const ThreeScene = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Simple 3D-like background effect without Three.js
    const createFloatingElements = () => {
      const numElements = 20

      for (let i = 0; i < numElements; i++) {
        const element = document.createElement('div')
        element.className = 'floating-element'

        const size = Math.random() * 4 + 2
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 5

        element.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          background: linear-gradient(45deg, rgba(100, 255, 218, 0.3), rgba(79, 195, 247, 0.3));
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: float ${duration}s infinite linear;
          animation-delay: ${delay}s;
          filter: blur(1px);
          pointer-events: none;
        `

        container.appendChild(element)
      }
    }

    // Create geometric shapes
    const createGeometricShapes = () => {
      const shapes = ['triangle', 'square', 'circle']
      const numShapes = 10

      for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div')
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)]
        const size = Math.random() * 30 + 20
        const duration = Math.random() * 30 + 20
        const delay = Math.random() * 10

        let shapeStyles = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: geometricFloat ${duration}s infinite linear;
          animation-delay: ${delay}s;
          opacity: 0.1;
          pointer-events: none;
        `

        switch (shapeType) {
          case 'triangle':
            shapeStyles += `
              width: 0;
              height: 0;
              border-left: ${size/2}px solid transparent;
              border-right: ${size/2}px solid transparent;
              border-bottom: ${size}px solid rgba(100, 255, 218, 0.3);
            `
            break
          case 'square':
            shapeStyles += `
              background: rgba(79, 195, 247, 0.2);
              transform: rotate(45deg);
            `
            break
          case 'circle':
            shapeStyles += `
              background: rgba(100, 255, 218, 0.2);
              border-radius: 50%;
            `
            break
        }

        shape.style.cssText = shapeStyles
        container.appendChild(shape)
      }
    }

    createFloatingElements()
    createGeometricShapes()

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: -1
  }

  return (
    <div ref={containerRef} style={containerStyle}>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes geometricFloat {
          0% {
            transform: translateY(-100px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ThreeScene