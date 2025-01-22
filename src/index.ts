// src/index.ts

import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')


app.use(bodyParser.json({
  extends: true
}))

// Define a "Hello World" route
app.get('/', (req: Request, res: Response) => {
  console.info({
    message: 'Consultando o get inicial'
  })
  const name = req.query.name || 'default'
  console.info({
    message: `params name passado: ${req.query.name}`
  })
  res.send(`Hello Linux ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
