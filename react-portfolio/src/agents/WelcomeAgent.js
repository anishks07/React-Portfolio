import { BaseAgent } from './BaseAgent';

export class WelcomeAgent extends BaseAgent {
  constructor() {
    super(
      'Welcome Guide',
      'I help visitors navigate the portfolio and find relevant information.',
      `I am a friendly guide who helps visitors explore this portfolio.
      I can direct you to different sections, explain projects, skills, and experience.
      I specialize in providing a personalized experience based on your interests.`
    );
  }

  async greet() {
    return this.respond(
      `Hi there! 👋 I'm your personal portfolio assistant. I can help you:
      - Learn about projects and technical implementations
      - Explore skills and experience
      - Find specific information about AI and web development work
      - Connect with Anish
      
      What would you like to know more about?`
    );
  }

  async suggestSection(interest) {
    const message = `Based on your interest in ${interest}, which sections of the portfolio would be most relevant?`;
    return this.respond(message);
  }
}