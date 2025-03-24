import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title" style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          marginBottom: '2.5rem'
        }}>Contact Me</h2>
        
        <div className="contact-content" style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div className="contact-info" style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            maxWidth: '600px',
            width: '100%',
            border: '1px solid rgba(226, 232, 240, 0.8)'
          }}>
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              padding: '1rem',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              background: 'rgba(243, 244, 246, 0.5)'
            }}>
              <i className="fas fa-envelope" style={{
                fontSize: '1.5rem',
                color: '#3b82f6',
                marginRight: '1.5rem',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.1)'
              }}></i>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.3rem' }}>Email</h3>
                <p style={{ color: '#64748b' }}>anishkst07@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              padding: '1rem',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              background: 'rgba(243, 244, 246, 0.5)'
            }}>
              <i className="fab fa-linkedin" style={{
                fontSize: '1.5rem',
                color: '#3b82f6',
                marginRight: '1.5rem',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.1)'
              }}></i>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.3rem' }}>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/anishkst07/" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', transition: 'color 0.3s ease' }}>https://www.linkedin.com/in/anishkst07</a></p>
              </div>
            </div>
            
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              padding: '1rem',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              background: 'rgba(243, 244, 246, 0.5)'
            }}>
              <i className="fab fa-github" style={{
                fontSize: '1.5rem',
                color: '#3b82f6',
                marginRight: '1.5rem',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.1)'
              }}></i>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.3rem' }}>GitHub</h3>
                <p><a href="https://github.com/anishks07" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', transition: 'color 0.3s ease' }}>github.com/anishks07</a></p>
              </div>
            </div>
            
            <div className="contact-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0',
              padding: '1rem',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              background: 'rgba(243, 244, 246, 0.5)'
            }}>
              <i className="fas fa-code" style={{
                fontSize: '1.5rem',
                color: '#3b82f6',
                marginRight: '1.5rem',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.1)'
              }}></i>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', marginBottom: '0.3rem' }}>LeetCode</h3>
                <p><a href="https://leetcode.com/u/AnishKS07/" target="_blank" rel="noopener noreferrer" style={{ color: '#64748b', transition: 'color 0.3s ease' }}>leetcode.com/u/AnishKS07</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
