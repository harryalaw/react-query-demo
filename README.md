# React Query Demo

This is a demo application I created to show how using Tanstack Query could help improve the UX and DX of an application. I used it as a live demo during a longer internal talk about what Tanstack Query is.

The base app allowed a user to add meal ideas, rate them and provide descriptions along with the ability to edit ones they've already added. As this is a demo, all the data was mocked out and provided through MSW.

The aim of the demo was to show how you could simplify state management, dedupe calls and reduce visible loading states by using Tanstack Query.

The `main` branch shows the state before any changes where I started the live demo and the `react-query` branch shows how it could look after adding queries and mutations.

A live version of the Tanstack-ed version can be found at: https://food-ideas-demo.vercel.app/

# Running

Tested using node 18.

Install dependencies with `npm install` / `pnpm install` then start application with `npm run dev` / `pnpm dev`.

Application should be available on localhost:5173
