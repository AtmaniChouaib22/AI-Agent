import type OpenAI from "openai";
import { generateImage, generateImageToolDefinition } from "./tools/generateImage";
import { reddit, redditToolDefinition} from "./tools/reddit";
import { dadJoke, dadJokeToolDefinition } from "./tools/dad.jokes";

//fake weather tool(function)
//const getWeather = () => `hot, 97deg`

//take a tool and a user message
export const runTool = async (toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall, userMessage: string) => {
    const input = {
        userMessage, 
        toolArgs: JSON.parse(toolCall.function.arguments || '{}')
    }

    //if the tool call function name matches get weather we exececute with the input
    switch(toolCall.function.name) {
        case generateImageToolDefinition.name:
            return generateImage(input)
        case redditToolDefinition.name: 
            return reddit(input)
        case dadJokeToolDefinition.name:
            return dadJoke(input)
        default: 
            return `Never run this tool: ${toolCall.function.name} again, or else!`
    }
}