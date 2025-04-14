import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ProjectAgent } from '../agents/ProjectAgent';
import { CareerAgent } from '../agents/CareerAgent';
import { WelcomeAgent } from '../agents/WelcomeAgent';
import { BusinessAdvisor } from '../agents/BusinessAdvisor';
import { ResearchAgent } from '../agents/ResearchAgent';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef(null);

  // Memoize agent instances to prevent re-creation on every render
  const projectAgent = useMemo(() => new ProjectAgent(), []);
  const careerAgent = useMemo(() => new CareerAgent(), []);
  const welcomeAgent = useMemo(() => new WelcomeAgent(), []);
  const businessAdvisor = useMemo(() => new BusinessAdvisor(), []);
  const researchAgent = useMemo(() => new ResearchAgent(), []);

  useEffect(() => {
    // Show welcome message when component mounts
    const showWelcomeMessage = async () => {
      const welcomeMessage = await welcomeAgent.greet();
      setMessages([{
        type: 'agent',
        content: welcomeMessage
      }]);
    };
    
    showWelcomeMessage();
  }, [welcomeAgent]); // Added welcomeAgent to dependency array

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user',
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      let response;
      const input = inputMessage.toLowerCase();

      // Define keywords for routing
      const projectKeywords = ['project', 'built', 'develop', 'create', 'implement', 'code', 'portfolio'];
      const careerKeywords = ['experience', 'skill', 'work', 'job', 'career', 'education', 'learn', 'background'];
      const businessKeywords = ['service', 'price', 'pricing', 'proposal', 'quote', 'client', 'business', 'offer'];
      const researchKeywords = ['research', 'trend', 'compare', 'technology', 'news', 'search', 'latest'];
      const welcomeKeywords = ['help', 'guide', 'navigate', 'hello', 'hi', 'welcome'];

      // Determine the most relevant agent
      if (businessKeywords.some(keyword => input.includes(keyword))) {
        if (input.includes('proposal') || input.includes('quote')) {
          response = await businessAdvisor.generateProposal(inputMessage);
        } else if (input.includes('process')) {
          response = await businessAdvisor.explainProcess();
        } else if (input.includes('service')) {
           // Basic check, could be refined to extract specific service type
          response = await businessAdvisor.getServicesOverview();
        } else {
          response = await businessAdvisor.respond(inputMessage); // General business query
        }
      } else if (researchKeywords.some(keyword => input.includes(keyword))) {
        if (input.includes('compare') && (input.includes('vs') || input.includes('versus'))) {
           // Basic extraction, could be improved
           const parts = input.split(/compare|vs|versus/i).map(s => s.trim()).filter(Boolean);
           if (parts.length >= 2) {
             response = await researchAgent.compareTechnologies(parts[0], parts[1]);
           } else {
             response = await researchAgent.searchWeb(inputMessage); // Fallback search
           }
        } else if (input.includes('trend')) {
          response = await researchAgent.getIndustryTrends();
        } else if (input.includes('technology') || input.includes('search')) {
           // Basic extraction
           const tech = input.split(/technology|search/i).pop().trim();
           if (tech) {
             response = await researchAgent.researchTechnology(tech);
           } else {
             response = await researchAgent.searchWeb(inputMessage); // Fallback search
           }
        } else {
          response = await researchAgent.searchWeb(inputMessage); // General research query
        }
      } else if (projectKeywords.some(keyword => input.includes(keyword))) {
         // Basic extraction, could be improved
         const projectNameMatch = input.match(/project\s*(.*?)(about|details)?$/i);
         if (projectNameMatch && projectNameMatch[1]) {
           response = await projectAgent.getProjectDetails(projectNameMatch[1].trim());
         } else {
           response = await projectAgent.respond(inputMessage); // General project query
         }
      } else if (careerKeywords.some(keyword => input.includes(keyword))) {
        if (input.includes('skill')) {
          const skillMatch = input.match(/skill\s*(.*?)(in|about)?$/i);
          response = await careerAgent.getSkillDetails(skillMatch ? skillMatch[1].trim() : inputMessage);
        } else if (input.includes('education')) {
          response = await careerAgent.getEducationDetails();
        } else {
          response = await careerAgent.getExperienceDetails(inputMessage); // General career query
        }
      } else if (welcomeKeywords.some(keyword => input.includes(keyword))) {
        if (input.includes('interest') || input.includes('looking for')) {
           const interestMatch = input.match(/(interest in|looking for)\s*(.*)/i);
           response = await welcomeAgent.suggestSection(interestMatch ? interestMatch[2].trim() : inputMessage);
        } else {
           response = await welcomeAgent.greet();
        }
      } else {
        // Default fallback to WelcomeAgent if no specific keywords match
        response = await welcomeAgent.respond(inputMessage);
      }

      const agentMessage = {
        type: 'agent',
        content: response
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage = {
        type: 'agent',
        content: 'I apologize, but I encountered an error. Please try again later.'
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="chat-interface" style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: isMinimized ? '60px' : ['90vw', '90vw', '350px'],
      height: isMinimized ? '60px' : ['70vh', '70vh', '500px'],
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1000,
      border: '1px solid rgba(226, 232, 240, 0.8)',
      transition: 'all 0.3s ease'
      // Removed unsupported '@media' query from inline styles
    }}>
      <div className="chat-header" style={{
        padding: '15px',
        borderBottom: isMinimized ? 'none' : '1px solid rgba(226, 232, 240, 0.8)',
        backgroundColor: '#1e293b',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }} onClick={toggleMinimize}>
        {!isMinimized && <h3 style={{ margin: 0 }}>Portfolio Assistant</h3>}
        <button 
          onClick={toggleMinimize}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '5px',
            fontSize: '1.2rem'
          }}
        >
          {isMinimized ? (
            <i className="fas fa-expand-alt"></i>
          ) : (
            <i className="fas fa-minus"></i>
          )}
        </button>
      </div>

      {!isMinimized && (
        <>
          <div className="chat-messages" style={{
            flex: 1,
            overflowY: 'auto',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  alignSelf: message.type === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: message.type === 'user' ? '#3b82f6' : '#f1f5f9',
                  color: message.type === 'user' ? 'white' : '#1e293b',
                  padding: '10px 15px',
                  borderRadius: '12px',
                  maxWidth: '80%',
                  wordBreak: 'break-word'
                }}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div style={{
                alignSelf: 'flex-start',
                backgroundColor: '#f1f5f9',
                color: '#1e293b',
                padding: '10px 15px',
                borderRadius: '12px'
              }}>
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input" style={{
            padding: '15px',
            borderTop: '1px solid rgba(226, 232, 240, 0.8)',
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              style={{
                padding: '10px 20px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                opacity: isLoading ? 0.7 : 1
              }}
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatInterface;
