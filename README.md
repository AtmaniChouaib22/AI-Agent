this Ai agent small CLI app (no interface) can: 
-generate a dad joke 
-generate a AI generated picture to describe the given joke
-get the funniest reddit posts from the web

## Setup Instructions

This repo requires **Node.js version 20+** or **bun v1.0.20**.
You will also need an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys).

```bash
npm install # or bun install
```

To run the project:

```bash
npm start
# or
bun run index.ts
```

## OpenAI API Key

Create an [API Key from OpenAI](https://platform.openai.com/settings/organization/api-keys) and save it in a `.env` file:

```
OPENAI_API_KEY='YOUR_API_KEY'
```
