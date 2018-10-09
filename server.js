const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/tmdbfrontend'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/tmdbfrontend/index.html'));

});

app.listen(process.env.PORT || 4200);


app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});