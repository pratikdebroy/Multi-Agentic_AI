import { StateGraph } from "@langchain/langgraph";
import agentState from "./agentState.js";
import { agentRouter } from "./agentRouter.js";
import { chat } from "../Agents/chat.agent.js";
import { coding } from "../Agents/coding.agent.js";
import { imageGen } from "../Agents/imageGen.agent.js";
import { pdf } from "../Agents/PDF.agent.js";
import { ppt } from "../Agents/PPT.agent.js";
import { search } from "../Agents/search.agent.js";

const graph=new StateGraph(agentState)
graph.addNode("agentRouter",agentRouter)
graph.addNode("chatAgent",chat)
graph.addNode("codingAgent",coding)
graph.addNode("imageGenAgent",imageGen)
graph.addNode("pdfAgent",pdf)
graph.addNode("pptAgent",ppt)
graph.addNode("searchAgent",search) 

graph.addEdge("__start__","agentRouter")
graph.addConditionalEdges("router", (state) => {
  switch (state.agent) {
    case "chat":
      return "chatAgent";

    case "search":
      return "searchAgent";

    case "coding":
      return "codingAgent";

    case "pdf":
      return "pdfAgent";

    case "ppt":
      return "pptAgent";

    case "imageGen":
      return "imageGenAgent";

    default:
      return "chat";
  }
},{
    chatAgent:"chatAgent",
    codingAgent:"codingAgent",
    searchAgent:"searchAgent",
    pptAgent:"pptAgent",
    pdfAgent:"pdfAgent",
    imageGenAgent:"imageGenAgent"
});

graph.addEdge("searchAgent","chatAgent")
graph.addEdge("chatAgent","__end__")
graph.addEdge("codingAgent","__end__")
graph.addEdge("pptAgent","__end__")
graph.addEdge("pdfAgent","__end__")
graph.addEdge("imageGenAgent","__end__")

export const Graph=graph.compile()