import { generateImage, generateImageToolDefinition} from "./generateImage";
import { reddit, redditToolDefinition } from "./reddit";
import { dadJoke, dadJokeToolDefinition } from "./dad.jokes";

export const tools = [generateImageToolDefinition, redditToolDefinition, dadJokeToolDefinition]