//const express = require('express');

//const app = express();
const express = require('express');
const app = express();
const port = 3000;

const authors = ['Lawrence Nowell, UK', 'William Shakespeare, UK', 'Charles Dickens, US','Oscar Wilde, UK' ]

const books = ['Beowulf', 'Hamlet, Othello, Romeo and Juliet, MacBeth', 'Oliver Twist, A Christmas Carol', 'The Picture of Dorian Gray, The Importance of Being Earnest']

/*app.get('/', (req, res) => {
    res.send(`Authors API !`);
});*/


app.get('/authors/:id', (req, res) => {
  res.send(authors[req.params.id -1])
});

const port = 3000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});