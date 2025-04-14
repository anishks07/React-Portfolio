import Groq from 'groq-sdk'; // Changed import source

export class BaseAgent {
  constructor(name, description, role) {
    this.name = name;
    this.description = description;
    this.role = role;
    // Ensure the API key is being read correctly. If process.env doesn't work in your setup,
    // you might need to handle environment variables differently (e.g., Vite uses import.meta.env).
    // For standard Create React App (which react-scripts suggests), process.env should work.
    const apiKey = process.env.REACT_APP_GROQ_API_KEY;
    if (!apiKey) {
      console.error("ERROR: REACT_APP_GROQ_API_KEY environment variable not found!");
      // Optionally, throw an error or handle it gracefully
    }
    this.groq = new Groq({
      apiKey: apiKey, // Explicitly pass the key
      dangerouslyAllowBrowser: true // Required for browser-side usage
    });
  }

  async respond(message, context = {}) {
    try {
      const response = await this.groq.chat.completions.create({
        messages: [
          { role: 'system', content: this.role },
          { role: 'user', content: message }
        ],
        model: 'llama3-70b-8192', // Updated model
        temperature: 0.7,
        max_tokens: 2048,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error in agent response:', error);
      return 'I apologize, but I encountered an error. Please try again later.';
    }
  }
}
