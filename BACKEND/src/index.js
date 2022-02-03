require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./db-config');

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.FRONTEND_CLIENT_URL || 'http://localhost:3000',
    credentials: true
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setupRoutes = require('./routes');
setupRoutes(app);

app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting : ', err.stack);
  } else {
    console.log('Connected to database ');
  }
});