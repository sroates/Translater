// Import the Express.js module
const express = require('express');
const sqlite3 = require('sqlite3');
const { Translate } = require('@google-cloud/translate');

// Create an instance of the Express application
const app = express();

// Define routes to handle incoming requests
// Example: Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the environment port if available, otherwise use port 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
