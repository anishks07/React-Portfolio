import { BaseAgent } from './BaseAgent';

export class ProjectAgent extends BaseAgent {
  constructor() {
    super(
      'Project Guide',
      'I can help you understand the technical details and implementation of various projects.',
      `I am a project expert who can provide detailed information about the portfolio projects.
      I specialize in explaining technical implementations, challenges faced, and solutions developed.
      I have deep knowledge of AI, Web Development, and other technical domains.`
    );
  }

  async getProjectDetails(projectName) {
    const message = `Tell me about the ${projectName} project, including its technical implementation and key features.`;
    return this.respond(message);
  }

  async suggestSimilarProjects(technology) {
    const message = `What are some similar projects that use ${technology}?`;
    return this.respond(message);
  }
}