const express = require('express');
const app = express();
const {resolve} = require('path');
const fromRoot = p => resolve(__dirname, '../', p);

app.use(express.static(fromRoot('./node_modules')));
app.use(express.static(fromRoot('./public')));

app.get('/', (req, res) =>
  res.sendFile(fromRoot('./server/index.html'))
);

app.use(require('./all-the-routes'));

app.listen(9001, () => console.log(
  `Listening on port over 9000!! (9001)`
));