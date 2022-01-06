// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Teste 123');
});

app.listen(3000, () => {
  console.log('rodando');
});

console.log('teste');
