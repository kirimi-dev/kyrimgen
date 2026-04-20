const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend is running! 🧠✅');
});

// Your AI API route
app.post('/api/ask', (req, res) => {
  const question = req.body.question;
  
  // For now, we just send it back
  // Later we will connect it to OpenAI or your AI model
  const answer = "This is the answer from backend: " + question;
  
  res.json({ reply: answer });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
