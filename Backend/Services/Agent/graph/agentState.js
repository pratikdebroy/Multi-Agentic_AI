import { Annotation } from "@langchain/langgraph";

const agentState=Annotation.Root({
    prompt:Annotation(),
    aiResponse=Annotation(),
    agent:Annotation(),
    conversationId:Annotation()
})
export default agentState