import React, { useState, useEffect } from 'react'

const ContactModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  })

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // Listen for modal activation
    const handleModalActivation = () => {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    }

    const handleModalDeactivation = () => {
      setIsActive(false)
      document.body.style.overflow = 'unset'
    }

    // Listen for custom events
    document.addEventListener('openContactModal', handleModalActivation)
    document.addEventListener('closeContactModal', handleModalDeactivation)

    return () => {
      document.removeEventListener('openContactModal', handleModalActivation)
      document.removeEventListener('closeContactModal', handleModalDeactivation)
      document.body.style.overflow = 'unset'
    }
  }, [])

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
      `My Name is: ${formData.name}

Message:
${formData.message}`
    )
    const mailtoLink = `mailto:dheerajsharma2709@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.open(mailtoLink, '_self')

    // Close modal
    closeModal()
  }

  const closeModal = () => {
    setIsActive(false)
    document.body.style.overflow = 'unset'
    
    // Reset form
    setFormData({
      name: '',
      subject: '',
      message: ''
    })
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  if (!isActive) return null

  return (
    <div 
      className="contact-modal"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Get In Touch</h2>
          <button 
            className="close-button"
            onClick={closeModal}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Subject of your message"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="Your message"
              rows="5"
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Send Message
            </button>
            <button 
              type="button" 
              className="cancel-button"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .contact-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: #1e1e1e;
          border-radius: 12px;
          padding: 2.5rem;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border: 1px solid #333333;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: slideIn 0.3s ease-out;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #64ffda;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          color: #a0a0a0;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: all 0.3s ease;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-button:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.1);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-input,
        .form-textarea {
          background: #2a2a2a;
          border: 1px solid #333333;
          border-radius: 8px;
          padding: 0.75rem;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #64ffda;
          box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #666666;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .submit-button,
        .cancel-button {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-button {
          background: linear-gradient(135deg, #64ffda 0%, #4fc3f7 100%);
          color: #0c0c0c;
        }

        .submit-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(100, 255, 218, 0.3);
        }

        .cancel-button {
          background: transparent;
          color: #a0a0a0;
          border: 1px solid #333333;
        }

        .cancel-button:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: scale(0.9) translateY(20px);
            opacity: 0;
          }
          to {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        /* Tablet Responsive */
        @media (max-width: 768px) {
          .contact-modal {
            padding: 0.75rem;
          }

          .modal-content {
            padding: 2rem;
            max-height: 95vh;
          }

          .modal-title {
            font-size: 1.375rem;
          }

          .form-actions {
            flex-direction: column;
          }

          .submit-button,
          .cancel-button {
            width: 100%;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 480px) {
          .contact-modal {
            padding: 0.5rem;
          }

          .modal-content {
            padding: 1.5rem;
            border-radius: 8px;
          }

          .modal-header {
            margin-bottom: 1.5rem;
          }

          .modal-title {
            font-size: 1.25rem;
          }

          .close-button {
            font-size: 1.25rem;
            min-width: 40px;
            min-height: 40px;
          }

          .contact-form {
            gap: 1.25rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.625rem;
            font-size: 0.95rem;
          }

          .form-textarea {
            min-height: 100px;
          }

          .form-actions {
            gap: 0.75rem;
            margin-top: 0.75rem;
          }

          .submit-button,
          .cancel-button {
            padding: 0.625rem 1.25rem;
            font-size: 0.95rem;
            min-height: 40px;
          }
        }

        /* Small mobile devices */
        @media (max-width: 360px) {
          .modal-content {
            padding: 1.25rem;
          }

          .modal-title {
            font-size: 1.125rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.5rem;
            font-size: 0.9rem;
          }
        }

        /* Touch-friendly improvements */
        @media (hover: none) and (pointer: coarse) {
          .close-button:active {
            transform: scale(0.95);
          }

          .submit-button:active,
          .cancel-button:active {
            transform: scale(0.98);
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .modal-content {
            max-height: 98vh;
            padding: 1.5rem;
          }

          .modal-header {
            margin-bottom: 1rem;
          }

          .contact-form {
            gap: 1rem;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .form-input,
          .form-textarea {
            border-width: 0.5px;
          }
        }
      `}</style>
    </div>
  )
}

export default ContactModal