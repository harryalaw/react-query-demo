# React Query Demo

Demo application to show how to add tanstack query to a simple application to show off queries/mutations. Used as the live coding section of an internal talk on what Tanstack Query is and how it can be added to an application to improve the user experience.

The application lets you curate meal ideas that you could have, give them ratings with the aim to help decide what to have for dinner. Data is pre-set using MSW and a json data file, but can be added to and edited.

The `main` branch shows the state before any changes and the `react-query` branch shows how it could look after adding queries and mutations.

# Running

Tested using node 18.

Install dependencies with `npm install` / `pnpm install` then start application with `npm run dev` / `pnpm dev`.

Application should be available on localhost:5173
