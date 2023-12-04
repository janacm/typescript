# Deprecated

Note to self: You started using Replit instead: https://replit.com/@JanacMeena/Janacs-Typescript, since it was simpler to run the code. However, it might be worthwhile figuring out how to setup a simple test repo offline, so I can use github copilot.

# Typescript Experiments

This repo tracks my progress with learning Typescript, and related technologies, including:

## Stack

- Typescript
  - Date library
- Jest tests
- NodeJS
- Built in WebStorm

### Frontend

- React Router
- Typescript Open API Standard - TOAS

### Backend

- TSyringe - DI Framework
- ExpressJS
- Yarn
- Nodemon

### My Review of this Stack

I started this repo May 11th 2021. Since then, NextJS has exploded in popularity, and ExpressJS is decreasing in popularity.
I plan on continuing my experiments in a new repo: https://github.com/janacm/nextjs/

# Setup

- Install [ts-node](https://yarnpkg.com/package/ts-node#readme)

```
# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node
```

# To Run

## Running Tests

We use `jest` for tests. Run `jest.test.ts`. via WebStorm.

## Running Frontend

1. Run `tsc`
   - This will compile and output the Typescript files as JS into `./out`.
2. Run `node out/app.js`
   - This starts the application

# To Debug

## To Debug TS Files

1. Run VSCode debugger, specifying `launch.json`

## To Debug JS files

1. Open a JavaScript Debug Terminal
2. Run `node out/app.js`

# Unit Testing

## Running Tests

1. `yarn test`

## Defining Tests

1. Filename must end with `.test.ts`
2. Run `tsc` after file creation <!-- TODO: Add ts-jest -->
