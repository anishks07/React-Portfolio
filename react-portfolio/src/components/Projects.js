import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title" style={{
          fontSize: '2.5rem',
          background: 'linear-gradient(to right, #3b82f6, #1d4ed8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          marginBottom: '2.5rem'
        }}>Projects</h2>
        
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          <div className="project-card" style={{
            background: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid rgba(226, 232, 240, 0.8)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
          }}>
            <div style={{ height: '8px', background: 'linear-gradient(to right, #3b82f6, #1d4ed8)' }}></div>
            <div className="project-content" style={{ padding: '2rem' }}>
              <h3 className="project-title" style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>
                Retrieval-Augmented Generation (RAG) System
              </h3>
              <p className="project-description" style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Developed an AI chatbot using LangChain + FAISS for real-time retrieval.
                Implemented vector-based search & LLM inference for enhanced response accuracy.
              </p>
              <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>Python</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>LangChain</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>FAISS</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>Transformers</span>
              </div>
              <a href="https://github.com/anishks07/RAG-PROJECT" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#3b82f6',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i>
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-card" style={{
            background: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid rgba(226, 232, 240, 0.8)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
          }}>
            <div style={{ height: '8px', background: 'linear-gradient(to right, #3b82f6, #1d4ed8)' }}></div>
            <div className="project-content" style={{ padding: '2rem' }}>
              <h3 className="project-title" style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>
                Healthcare Assistant Chatbot
              </h3>
              <p className="project-description" style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Built an AI-powered chatbot for basic healthcare assistance.
                Integrated GPT-2, rule-based responses, and deployed via Streamlit.
              </p>
              <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>Python</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>Streamlit</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>NLTK</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>Transformers</span>
              </div>
              <a href="https://github.com/anishks07/AICTE-INTERNSHIP-HEALTH-CARE-ASSISTANT-" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#3b82f6',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i>
                View on GitHub
              </a>
            </div>
          </div>

          <div className="project-card" style={{
            background: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid rgba(226, 232, 240, 0.8)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
          }}>
            <div style={{ height: '8px', background: 'linear-gradient(to right, #3b82f6, #1d4ed8)' }}></div>
            <div className="project-content" style={{ padding: '2rem' }}>
              <h3 className="project-title" style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>
                Calculator Website
              </h3>
              <p className="project-description" style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Developed a fully functional calculator web application with a clean, modern interface.
                Features include standard arithmetic operations, memory functions, and responsive design.
              </p>
              <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>HTML</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>CSS</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>JavaScript</span>
                <span style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '500' }}>Responsive Design</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/anishks07/Calculator-website" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#3b82f6',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}>
                  <i className="fab fa-github" style={{ marginRight: '0.5rem' }}></i>
                  View on GitHub
                </a>
                <a href="https://calculator-website-ax6tb64at-anish-sai-s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: '#3b82f6',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  marginLeft: '1.5rem'
                }}>
                  <i className="fas fa-external-link-alt" style={{ marginRight: '0.5rem' }}></i>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
