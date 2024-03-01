// Require/import Express.js
// Require/import necessary modules
const express = require('express');
const sqlite3 = require('sqlite3');
const { Translate } = require('@google-cloud/translate');

// Create an Express application
const app = express();

// Set up routes and middleware
// For example:
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


// Get a reference to the form element
let loginForm = document.getElementById("inputedPhrase");

// Add an event listener for the form submission event
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let phrase = document.getElementById("phrase");

    if (phrase.value === "") {
        alert("Please enter a phrase.");
    } else {
        alert("This form has been successfully submitted!");
        console.log(`The user entered the phrase ${phrase.value}`);
    }
});
