import React, { useState } from 'react'

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    )
    const mailtoLink = `mailto:dheerajsharma2709@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink

    // Close modal
    closeModal()
  }

  const closeModal = () => {
    const modal = document.querySelector('.contact-modal')
    if (modal) {
      modal.classList.remove('active')
    }
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.8)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.3s ease'
  }

  const modalContentStyle = {
    background: '#1e1e1e',
    borderRadius: '12px',
    padding: '2.5rem',
    maxWidth: '500px',
    width: '90%',
    maxHeight: '90vh',
    overflowY: 'auto',
    border: '1px solid #333333',
    transform: 'scale(0.9)',
    transition: 'transform 0.3s ease'
  }

  const modalHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem'
  }

  const modalTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#64ffda'
  }

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#a0a0a0',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'color 0.3s ease'
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  }

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }

  const labelStyle = {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: '0.95rem'
  }

  const inputStyle = {
    background: '#2a2a2a',
    border: '1px solid #333333',
    borderRadius: '8px',
    padding: '0.75rem',
    color: '#ffffff',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease'
  }

  const textareaStyle = {
    ...inputStyle,
    minHeight: '120px',
    resize: 'vertical',
    fontFamily: 'inherit'
  }

  const submitButtonStyle = {
    background: 'linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%)',
    color: '#0c0c0c',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem'
  }

  return (
    <>
      <div 
        className="contact-modal" 
        style={modalStyle}
        onClick={(e) => {
          if (e.target.classList.contains('contact-modal')) {
            closeModal()
          }
        }}
      >
        <div style={modalContentStyle}>
          <div style={modalHeaderStyle}>
            <h3 style={modalTitleStyle}>Get In Touch</h3>
            <button 
              style={closeButtonStyle}
              onClick={closeModal}
              onMouseEnter={(e) => e.target.style.color = '#64ffda'}
              onMouseLeave={(e) => e.target.style.color = '#a0a0a0'}
            >
              ×
            </button>
          </div>

          <form style={formStyle} onSubmit={handleSubmit}>
            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="name">Name *</label>
              <input
                style={inputStyle}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#64ffda'}
                onBlur={(e) => e.target.style.borderColor = '#333333'}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="email">Email *</label>
              <input
                style={inputStyle}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                onFocus={(e) => e.target.style.borderColor = '#64ffda'}
                onBlur={(e) => e.target.style.borderColor = '#333333'}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="subject">Subject</label>
              <input
                style={inputStyle}
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                onFocus={(e) => e.target.style.borderColor = '#64ffda'}
                onBlur={(e) => e.target.style.borderColor = '#333333'}
              />
            </div>

            <div style={inputGroupStyle}>
              <label style={labelStyle} htmlFor="message">Message *</label>
              <textarea
                style={textareaStyle}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell me about your project or just say hello!"
                onFocus={(e) => e.target.style.borderColor = '#64ffda'}
                onBlur={(e) => e.target.style.borderColor = '#333333'}
              />
            </div>

            <button 
              type="submit"
              style={submitButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 8px 25px rgba(100, 255, 218, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-modal.active {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .contact-modal.active .modal-content {
          transform: scale(1) !important;
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 2rem !important;
            width: 95% !important;
          }
        }

        @media (max-width: 480px) {
          .modal-content {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default ContactModal