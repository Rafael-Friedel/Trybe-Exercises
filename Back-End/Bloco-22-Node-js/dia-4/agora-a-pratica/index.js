const express = require('express');
const app = express();
app.use(express.json());
const { getSimpsons, setSimpsons } = require('./helpers')

app.get('/ping', (req, res) => {
  res.json({message: 'pong'})
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}`})
})


app.post('/greetings',(req, res) => {
  const { name, age } = req.body;
  if(Number(age) > 17) res.json({ message: `Hello, ${name}`})
  return res.status(401).json({ message: 'Unauthorized'})
})

app.put('/users/:name/:age',(req, res) => {
  const { name, age } =  req.params;
  res.json({message: `Seu nome é ${name}  e você tem ${age} anos de idade`})
})

app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
})

app.listen(4000, () => {
    console.log('Aplicação ouvindo na porta 4000');
  });
