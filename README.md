this Ai agent small CLI app (no interface) can:

- **dad jokes**: get random dad jokes from ([https://icanhazdadjoke.com/api](https://icanhazdadjoke.com/api))
- **Image generation**: generate a image representaion of that joke.
- **get reddit posts**: get funny reddit posts.
- **got a memory**: remember the chat.

## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.
You will also need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys).

```bash
npm install # or bun install
```

To run the project:

```bash
npm start "your prompt dad joke/Ai generated image/reddit posts"
# or
bun run index.ts "prompt"
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```
