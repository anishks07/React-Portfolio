import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(to right, #1e293b, #0f172a)',
      color: 'white',
      padding: '3rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)'
    }}>
      <div className="container">
        <div className="social-links" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <a 
            href="https://www.linkedin.com/in/anishkst07" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/anishks07" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://leetcode.com/u/AnishKS07/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.5rem',
              transition: 'all 0.3s ease',
              width: '45px',
              height: '45px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = 'rgba(59, 130, 246, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <i className="fas fa-code"></i>
          </a>
        </div>
        <p style={{
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '0.9rem',
          letterSpacing: '0.5px'
        }}>&copy; {new Date().getFullYear()} Anish Sai Konda. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
