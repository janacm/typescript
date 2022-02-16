# Typescript Experiments
This repo tracks my progress with learning Typescript, and related technologies, including:

- Typescript features
    - Date
- TOAS
- TSyringe
- MikroORM
- ExpressJS
- Yarn
- NodeJS
- Nodemon
- Built in WebStorm

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