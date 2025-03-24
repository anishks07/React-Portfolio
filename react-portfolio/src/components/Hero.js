import React from 'react';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-profile">
            <img 
              src="Images/profile.jpeg" 
              alt="Anish Sai Konda" 
              className="profile-image"
              style={{ 
                width: '220px', 
                height: '220px', 
                borderRadius: '50%', 
                border: '4px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
              }} 
            />
            <div className="glowing-circle" style={{
              position: 'absolute',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #3b82f6, #2563eb, #1d4ed8)',
              opacity: '0.15',
              filter: 'blur(15px)',
              zIndex: '-1'
            }}></div>
          </div>
          
          <h1 style={{ 
            color: 'white', 
            fontSize: '3.5rem', 
            fontWeight: '800', 
            marginBottom: '0.5rem', 
            textAlign: 'center',
            background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Anish Sai Konda
          </h1>
          
          <h2 style={{ 
            color: 'white', 
            fontSize: '1.6rem', 
            fontWeight: '500', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            letterSpacing: '1px'
          }}>
            AI & Web Developer
          </h2>
          
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.85)', 
            fontSize: '1.2rem', 
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            textAlign: 'center' 
          }}>
            Welcome to my portfolio! 
          </p>
          
          <div className="hero-buttons" style={{ 
            display: 'flex', 
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            <a 
              href="#contact" 
              className="btn btn-primary" 
              style={{ 
                background: 'linear-gradient(to right, #3b82f6, #2563eb)',
                color: 'white', 
                padding: '1rem 2rem', 
                borderRadius: '30px', 
                textDecoration: 'none', 
                fontWeight: '600',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.3)';
              }}
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="btn btn-outline" 
              style={{ 
                border: '2px solid rgba(255, 255, 255, 0.8)', 
                color: 'white', 
                padding: '1rem 2rem', 
                borderRadius: '30px', 
                textDecoration: 'none', 
                fontWeight: '600',
                letterSpacing: '0.5px',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.color = '#1e293b';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
