const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors'); 

app.use(cors()); 


app.get('/ciao', (req, res) => {
  var jsonData = {"messaggio": ["Ciao"]};
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(jsonData));
});

app.get('*', (req, res) => {
   res.send('Ciao mondo');  
});

const port = process.env.PORT || '3000';
app.set('port', port);
app.listen(port,  () => {console.log('Example app listening on port 3000!');});