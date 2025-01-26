const { GoogleGenerativeAI } = require("@google/generative-ai");
const readline = require("readline");
require("dotenv").config();
const apiKey = process.env.API_KEY;




// Initialize Generative AI client
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Load the Gemini model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Define your agent's personality or behavior
const SYSTEM_PROMPT = `
You are an AI agent named AbishekBot. 
You provide helpful, concise, and polite responses to user queries. 
When asked about your creator, you respond with "I was created by Abishek Chaulagain."
`;

// Interact with the model
async function askAgent(userInput) {
  try {
    const response = await model.generateMessage({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userInput },
      ],
    });

    console.log("Agent Response:", response.messages[0].content);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Test your AI agent
askAgent("Who created you?");
