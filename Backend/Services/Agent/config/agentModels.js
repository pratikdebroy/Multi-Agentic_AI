import { ChatGroq } from "@langchain/groq"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai"

const grok = new ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0.7,
    maxTokens: undefined,
    maxRetries: 2,
})

const gemini = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-pro",
    temperature: 0.7,
    maxRetries: 2,
})

export const getModel = async (agent) => {
  switch (agent) {
    case "chat":
      return groq;

    case "search":
      return groq;

    case "coding":
      return gemini;

    case "ppt":
      return gemini;

    case "pdf":
      return gemini;

    case "imageGen":
      return gemini;

    default:
      return groq;
  }
};