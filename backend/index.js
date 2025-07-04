const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ erro: 'latitude e longitude sao obrigatorias' });

  try {
    const resposta = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat,
        lon,
        appid: process.env.OPENWEATHER_KEY,
        units: 'metric',
        lang: 'pt_br'
      }
    });
    res.json(resposta.data);
  } catch {
    res.status(500).json({ erro: 'erro ao buscar a previsao' });
  }
});

app.listen(3001, () => console.log('backend rodando na porta 3001'));
