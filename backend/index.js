const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const { router } = require('./routes/transaction');
const app = express();
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

const __dirname = path.resolve();

//middlewares

app.use(express.json());
app.use(cors());

//routes
readdirSync('./routes').map((route) =>
  app.use('/api/v1', require('./routes/' + route))
);

app.use(express.static(path.join(__dirname, '/frontend-tracker/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend-tracker', 'dist', 'index.html'));
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('port running on PORT:', PORT);
  });
};

server();
