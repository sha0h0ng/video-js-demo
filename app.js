const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (for example, CSS, JS files) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
