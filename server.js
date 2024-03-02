const express = require('express');
const app = express();
const port = 3000; // You can change this port as needed

// Middleware to serve static files (like index.html)
app.use(express.static('public'));

// Middleware to parse JSON
app.use(express.json());
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('translations.db');
// db.run('CREATE TABLE IF NOT EXISTS phrases (id INTEGER PRIMARY KEY AUTOINCREMENT, phrase TEXT)');

let lastID; 
app.post('/store', (req, res) => {
  const { phrase, language } = req.body;
  if (!phrase || !language) {
      return res.status(400).send('Phrase or language is missing in the request.');
  }

  // Insert the phrase into the database
  db.run('INSERT INTO phrases (phrase, language) VALUES (?, ?)', [phrase, language], function(err) {
      if (err) {
          return res.status(500).send('Error storing phrase in database.');
      }
      lastID= this.lastID;

      console.log(`Phrase and language stored with ID: ${lastID}`);
      res.send(`Phrase and langauge received and stored successfully: ${phrase}`);
  });
});

app.get('/getPhrase', (req, res) => {
  db.all(`SELECT phrase, language FROM phrases ORDER BY id DESC LIMIT 1`, function(err, rows) {
    if (err) {
        return console.error(err.message);
    }
    // Process the returned data
    res.json(rows);
});


});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
