const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome Page</title>
        <style>
          body { font-family: Arial; background: #f0f8ff; text-align: center; padding: 50px; }
          h1 { color: #2c3e50; }
        </style>
      </head>
      <body>
        <h1>Hello, SAP BTP World!</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

