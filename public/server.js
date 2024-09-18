const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
