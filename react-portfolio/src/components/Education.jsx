import React from 'react';

function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          <div className="education-item">
            <div className="education-date">2022 – 2026</div>
            <h3>GITAM University, Visakhapatnam</h3>
            <p>B.Tech – CSE (AIML)</p>
            <p>CGPA: 7.65 (Recent SGPA: 8.95)</p>
          </div>
          
          <div className="education-item">
            <div className="education-date">2020 – 2022</div>
            <h3>Ascent Junior College, Visakhapatnam</h3>
            <p>Intermediate (MPC)</p>
            <p>Percentage: 82.3%</p>
          </div>
          
          <div className="education-item">
            <div className="education-date">2008 – 2020</div>
            <h3>Bethany School, Visakhapatnam</h3>
            <p>Grade X</p>
            <p>Percentage: 86.6%</p>
          </div>
        </div>
        
        <div className="certifications">
          <h3 className="section-subtitle">Certifications</h3>
          <ul>
            <li>AI/ML Workshop and Hackathon - BITS Pilani Hyderabad  (2025)</li>
            <li>Prompt Design in Vertex AI Skill Badge – Google (2024)</li>
            <li>Develop GenAI Apps with Gemini and Streamlit Skill Badge – Google (2024)</li>
            <li>Artificial Intelligence Workshop – IIT Bombay & GUVI HCL (2024)</li>
          </ul>
        </div>
        
        <div className="additional-info">
          <h3 className="section-subtitle">Languages</h3>
          <p>English, Telugu, Hindi</p>
          
          <h3 className="section-subtitle">Hobbies</h3>
          <p>Playing basketball, Exploring New Technologies</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
