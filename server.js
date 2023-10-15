const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/chat', async (req, res) => {
  const userInput = req.body.input;
  
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const messages = [
    // ... (tu configuración previa de mensajes)
    {"role": "user", "content": userInput}
  ];
  const payload = {
    "model": "gpt-3.5-turbo-16k",
    "messages": messages,
    "temperature": 0.2
  };
  
  try {
    const response = await fetch(apiUrl, {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const content = await response.json();
    if (content.choices && content.choices.length > 0) {
      res.json({ response: content.choices[0].message.content.trim() });
    } else {
      res.json({ error: 'No se pudo obtener una respuesta.' });
    }
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
