import { addMessages, getMessages, saveToolResponse } from './memory'
import { runLLM  } from "./llm"
import { showLoader, logMessage } from "./ui"
import { runTool } from './toolRunner'

export const runAgent = async({ userMessage, tools }: { userMessage: string, tools: any[] }) => {
    await addMessages([{role: 'user', content: userMessage}])

    //save user message to the db
    const loader = showLoader('🤔')
   while(true) {
        const history = await getMessages(); 
        //feed all messages to the LLM and also the tools
        const response = await runLLM({ messages: history, tools })
        //add LLM(assistant) response to the db
        await addMessages([response])
         if(response.content){
            loader.stop()
            logMessage(response); 
            return getMessages()
         }
    //if there is a tool call in the LLM response 
    if( response.tool_calls) {
        const toolCall = response.tool_calls[0]
        logMessage(response); 
        loader.update(`executing: ${toolCall.function.name}`)
        //call the tool with the tool 
        const toolResponse = await runTool(toolCall, userMessage)
        await saveToolResponse(toolCall.id, toolResponse)//save the tool response with the same toolcall id
        loader.update(`done: ${toolCall.function.name}`)
    }
   }
}