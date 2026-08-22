import { getModel } from "../config/agentModels.js";

export const agentRouter = async (state) => {
    const llm = await getModel("agentRouter");

    const prompt = `
You are an agent router.

Available agents:

- chat
- search
- coding
- pdf
- ppt
- imageGen

Rules:

chat:
General conversation,
explanations,
learning,
questions.

search:
Questions requiring current or external information,
web searches,
latest news,
recent developments,
real-time information.

coding:
Programming questions,
debugging,
code generation,
architecture,
technical implementation.

pdf:
Creating, analyzing, summarizing, or working with PDF files.

ppt:
Creating, analyzing, or working with PowerPoint presentations.

image:
Image generation,
image editing,
visual creation,
diagrams,
and image-related requests.

Return ONLY the name of the most appropriate agent from the available agents.
Do not provide any explanation.

User request:
${state.prompt}
`;

    const response = await llm.invoke(prompt);

    return {
        ...state,
        agent: response.content.trim(),
    };
};