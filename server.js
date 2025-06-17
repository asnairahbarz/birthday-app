const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve static files from 'Public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Serve the celebrant.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'celebrant.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
