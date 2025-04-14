import { BaseAgent } from './BaseAgent';

export class ResearchAgent extends BaseAgent {
  constructor() {
    super(
      'Research Assistant',
      'I search for information about technologies, trends, and industry news.',
      `I am a research specialist agent. I can provide information on various topics,
      compare technologies, and summarize industry trends based on my knowledge base.
      Ask me about specific technologies, comparisons, or the latest developments.`
    );
  }

  // Simulates search_web using LLM knowledge
  async searchWeb(query) {
    const message = `Provide information about '${query}' as if you've just searched the web for the latest information. Include key points and insights based on your knowledge up to your last update.`;
    return this.respond(message);
  }

  // Corresponds to research_technology in Python
  async researchTechnology(technology) {
    const message = `Based on your knowledge, provide a concise summary of the technology '${technology}', including: What it is, its current state/popularity, key features/benefits, common use cases, and potential future trends.`;
    return this.respond(message);
  }

  // Corresponds to compare_technologies in Python
  async compareTechnologies(tech1, tech2) {
    const message = `Compare ${tech1} vs ${tech2} based on your knowledge. Include core differences, performance considerations, learning curve, community support, and typical use case recommendations.`;
    return this.respond(message);
  }

  // Corresponds to get_industry_trends in Python
  async getIndustryTrends() {
    const message = `Describe current trends in the software development and technology industry that are important for developers to be aware of, based on your knowledge up to your last update. Include emerging technologies, industry shifts, and in-demand skills.`;
    return this.respond(message);
  }
}
