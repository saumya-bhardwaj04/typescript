# TypeScript + Node + Express Setup

This folder is already set up. Use these short notes if you want to do it again from scratch.

## 1. Create the project

```bash
npm init -y
npx tsc --init
```

## 2. Install packages

```bash
npm i express
npm i -D typescript @types/node @types/express nodemon ts-node concurrently
```

## 3. Create `src/server.ts`

```ts
import express, { type Request, type Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Server started");
});
```

## 4. Update `package.json`

Add:

```json
"type": "module"
```

Under `"scripts"` add:

```json
"build": "npx tsc",
"start": "node dist/server.js",
"dev": "concurrently \"npx tsc --watch\" \"nodemon dist/server.js\""
```

## 5. Keep `tsconfig.json` simple

Useful options for this project:

```json
"rootDir": "./src",
"outDir": "./dist",
"types": ["node"]
```

## 6. Run the project

```bash
npm run build
npm start
```

For development:

```bash
npm run dev
```

`npm run dev` watches TypeScript files and restarts the server after rebuild.