const express = require('express');
const path = require('path');
const app = express();

// Handles any requests that don't match the ones above
app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);