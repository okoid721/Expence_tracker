const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3001;

//middlewares

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('hello');
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('port running on PORT:', PORT);
  });
};

server();
