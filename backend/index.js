require('dotenv').config();

const PORT = process.env.PORT || 3001;

const server = () => {
  console.log('port running on PORT:', PORT);
};

server();
