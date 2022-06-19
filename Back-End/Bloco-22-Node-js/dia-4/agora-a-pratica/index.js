const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.json({message: 'pong'})
})

app.listen(4000, () => {
    console.log('Aplicação ouvindo na porta 4000');
  });
