import { BaseAgent } from './BaseAgent';

export class BusinessAdvisor extends BaseAgent {
  constructor() {
    super(
      'Business Advisor',
      'I provide information about services, pricing, and the client engagement process.',
      `I am a client specialist agent for this portfolio.
      I can explain available services (like Web Development, Mobile Development, Consulting),
      provide details on pricing models and ranges, outline the typical client engagement process,
      and even help draft preliminary project proposals based on requirements.`
    );
  }

  // Corresponds to get_services_overview in Python
  async getServicesOverview() {
    const message = `Provide a professional overview of the freelance services offered, including web development, mobile development, and technical consulting.`;
    return this.respond(message);
  }

  // Corresponds to get_service_details in Python
  async getServiceDetails(serviceType) {
    const message = `Generate a detailed description for the ${serviceType} service, including typical deliverables, value proposition, pricing model, estimated range, timeline, and technologies used.`;
    return this.respond(message);
  }

  // Corresponds to explain_process in Python
  async explainProcess() {
    const message = `Explain the typical client engagement process step-by-step, from initial consultation to project delivery and support.`;
    return this.respond(message);
  }

  // Corresponds to generate_proposal in Python
  async generateProposal(projectDescription) {
    const message = `Generate a preliminary project proposal based on the following client requirements: "${projectDescription}". Include sections like Project Understanding, Proposed Approach, Estimated Timeline, Estimated Budget Range, and Next Steps. Base it on the standard services offered.`;
    return this.respond(message);
  }
}
