// src/index.ts

import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Define a "Hello World" route
app.get('/', (req: Request, res: Response) => {
  console.info({
    message: 'Consultando o get inicial'
  })
  const { name } = req.params
  console.info({
    message: `params name passado: ${name}`
  })
  res.send(`Hello ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
