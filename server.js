const express = require('express');
const app = express();
const path = require('path');


console.log(path.join(__dirname, 'dist'));

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

console.log('working express');
