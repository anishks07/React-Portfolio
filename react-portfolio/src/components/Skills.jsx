import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming</h3>
            <div className="skill-list">
              <span className="skill-item">Python</span>
              <span className="skill-item">C</span>
              <span className="skill-item">SQL</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>AI & Machine Learning</h3>
            <div className="skill-list">
              <span className="skill-item">LangChain</span>
              <span className="skill-item">FAISS</span>
              <span className="skill-item">Transformers</span>
              <span className="skill-item">Pandas</span>
              <span className="skill-item">NumPy</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Web Development</h3>
            <div className="skill-list">

            <span className="skill-item">HTML</span>
              <span className="skill-item">CSS</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">React</span>
              <span className="skill-item">Angular</span>
              <span className="skill-item">GitHub Pages</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Access Control & Security</h3>
            <div className="skill-list">
              <span className="skill-item">RBAC</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Tools & Frameworks</h3>
            <div className="skill-list">
              <span className="skill-item">Git/GitHub</span>
              <span className="skill-item">Jupyter Notebook</span>
              <span className="skill-item">Visual Studio Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
