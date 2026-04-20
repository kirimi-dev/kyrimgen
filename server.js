const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.send('🎨 KYRIM AI API IS RUNNING! Images & Videos');
});

// 🖼️ IMAGE GENERATOR
app.get('/image', (req, res) => {
  const prompt = req.query.prompt;
  
  if(!prompt){
    return res.json({ error: "Please write a prompt!" });
  }

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

  res.json({
    success: true,
    type: "image",
    prompt: prompt,
    url: imageUrl
  });
});

// 🎥 VIDEO GENERATOR
app.get('/video', (req, res) => {
  const prompt = req.query.prompt;
  
  if(!prompt){
    return res.json({ error: "Please write a prompt!" });
  }

  const videoUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}, cinematic, moving?type=gif&nologo=true`;

  res.json({
    success: true,
    type: "video",
    prompt: prompt,
    url: videoUrl
  });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
