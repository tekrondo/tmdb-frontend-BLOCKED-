const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('/dist/tmdb-frontend'));
app.get('/*', function(req,res) {
res.sendFile('/dist/tmdb-frontend/index.html');

});

app.listen(process.env.PORT || 4200);


app.get('*', function (req, res) {
  const index = path.join(__dirname, 'dist/tmdb-frontend', 'index.html');
  res.sendFile(index);
});