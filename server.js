const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Serve HTML files directly (like celebrant.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'celebrant.html'));
});

// ✅ Serve messages if needed
app.get('/messages', (req, res) => {
  res.json([
    "Wishing you all the best!",
    "Happy Birthday, Dr. Nelia!",
    "May your day be filled with joy 🎂"
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
