import { getModel } from "../config/agentModels";

export const chat = async (state) => {
  const llm = await getModel("chat");

  const systemPrompt =
    "You are vision AI, an intelligent AI assistant.";

  const response = await llm.invoke([
    {
      role: "system",
      content: systemPrompt,
    },
    {
      role: "human",
      content: state.prompt,
    },
  ]);

  return {
    ...state,
    aiResponse: response.content,
  };
};