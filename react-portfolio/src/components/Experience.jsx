import React from 'react';

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Feb 2025 – Present</div>
              <h3>Contributor – DevOps-Bot</h3>
              <ul>
                <li>Joined as a Tester & Documentation Contributor, improving DevOps automation workflows.</li>
                <li>Worked on RBAC (Role-Based Access Control) to enhance security & access policies.</li>
                <li>Created detailed documentation for workflows test cases.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Jan – Feb 2025</div>
              <h3>AI Intern – TechSaksham (Microsoft & SAP Initiative, AICTE)</h3>
              <ul>
                <li>Developed a Healthcare Assistant Chatbot for answering medical queries.</li>
                <li>Integrated GPT-2 for text generation with rule-based responses.</li>
                <li>Used Python, Streamlit, NLTK, and Transformers to enhance user experience.</li>
                <li>Assisted users with symptom guidance and medication reminders.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">Dec 2024</div>
              <h3>Generative AI Workshop – TechFest, IIT Bombay</h3>
              <ul>
                <li>Worked with vector databases (FAISS, Ollama) for modern AI applications.</li>
                <li>Built Retrieval-Augmented Generation (RAG) systems using LangChain.</li>
                <li>Developed AI chatbots leveraging Transformer-based architectures.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
