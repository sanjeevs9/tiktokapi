# Cloudflare Workers API with Hono and GraphQL Yoga

A modern API built using Cloudflare Workers, Hono framework, and GraphQL Yoga. This project provides a scalable and efficient way to create serverless APIs with GraphQL support.

## 🚀 Technologies

- [Cloudflare Workers](https://workers.cloudflare.com/) - Serverless platform
- [Hono](https://hono.dev/) - Lightweight web framework
- [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) - Fully-featured GraphQL Server
- [TypeScript](https://www.typescriptlang.org/) - Type safety and modern JavaScript features

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or later)
- Cloudflare account
- Wrangler CLI

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/your-project-name.git
cd your-project-name
```
2. Install dependencies:
```
npm install
```
3. Configure Wrangler:
Create or modify `wrangler.toml` with your project settings.

4. Start the development server:
```
npm run dev
```
5. Deploy to Cloudflare Workers:
```
npm run deploy
```
6.Create api.ts

export const RAPID_KEY= "Your rapid api key" 

export const TIKTOK="https://tiktok-api23.p.rapidapi.com/api"

## 📁 Project Structure
```
├── src/
│ ├── index.ts # Main application entry
│ ├── graphql/
│ │ ├── type.ts # GraphQL type definitions
│ │ └── resolver.ts # GraphQL resolvers
│ └── ...
├── wrangler.toml # Cloudflare Workers configuration
└── package.json
```




