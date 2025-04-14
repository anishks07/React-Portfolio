import { BaseAgent } from './BaseAgent';

export class CareerAgent extends BaseAgent {
  constructor() {
    super(
      'Career Guide',
      'I help explain career experience, skills, and educational background.',
      `I am a career expert who can provide detailed information about professional experience,
      skills, education, and career achievements. I can explain technical skills, project roles,
      and educational qualifications in detail.`
    );
  }

  async getExperienceDetails(query) {
    const message = `Tell me about the professional experience related to: ${query}`;
    return this.respond(message);
  }

  async getSkillDetails(technology) {
    const message = `What is the level of expertise and experience with ${technology}?`;
    return this.respond(message);
  }

  async getEducationDetails() {
    const message = `Tell me about the educational background and relevant certifications.`;
    return this.respond(message);
  }
}