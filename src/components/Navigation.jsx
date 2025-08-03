import React, { useState, useEffect } from 'react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 0',
    background: isScrolled ? 'rgba(12, 12, 12, 0.95)' : 'rgba(12, 12, 12, 0.9)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  }

  const menuStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0
  }

  const linkStyle = {
    color: '#a0a0a0',
    fontWeight: '500',
    textDecoration: 'none',
    position: 'relative',
    transition: 'color 0.3s ease'
  }

  const mobileMenuStyle = {
    display: 'none',
    flexDirection: 'column',
    background: 'none',
    padding: '0.5rem',
    cursor: 'pointer'
  }

  const hamburgerStyle = {
    width: '25px',
    height: '3px',
    background: '#ffffff',
    margin: '3px 0',
    transition: 'all 0.3s ease'
  }

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          DS
        </div>

        <ul style={{...menuStyle, left: isMobileMenuOpen ? '0' : '-100%'}}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                style={linkStyle}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => e.target.style.color = '#64ffda'}
                onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button 
          style={mobileMenuStyle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span style={hamburgerStyle}></span>
          <span style={hamburgerStyle}></span>
          <span style={hamburgerStyle}></span>
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 1rem;
          }

          .mobile-menu-toggle {
            display: flex !important;
          }

          .nav-menu {
            position: fixed;
            top: 70px;
            left: ${isMobileMenuOpen ? '0' : '-100%'};
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(12, 12, 12, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: start;
            align-items: center;
            padding-top: 3rem;
            gap: 2rem;
            transition: left 0.3s ease;
          }

          .nav-link {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation