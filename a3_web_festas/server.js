const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/decorations.json', async (req, res) => {
  const data = await fs.readFile(path.join(__dirname, 'public/listaProdutos.json'));
  res.json(JSON.parse(data));
});

app.put('/decorations.json', async (req, res) => {
  await fs.writeFile(
    path.join(__dirname, 'public/listaProdutos.json'),
    JSON.stringify(req.body, null, 2)
  );
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));