
var bodyParser = require('body-parser');
var needle = require('needle');

function run(appdir) {
  var express = require('express');
  var app = express();

  app.dir = process.cwd();
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());
  
  app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/<tmdb-frontend>/index.html'));
  });

  // app.get('/', function(req, res) {
  //   res.sendFile('index.html', {
  //     root: './'
  //   });
  // });

  // Standard error handling
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  // Fire up server
  var server = app.listen(process.env.PORT || 5555, function() {
    console.log('Listening on port %d', server.address().port);
  });

  const tmdbObj = {
    baseMovie: "https://api.themoviedb.org/3/movie",
    baseSearchMovie: "https://api.themoviedb.org/3/search/movie",
    base2: "https://api.themoviedb.org/3/movie/popular",
    baseUrl: "",
    youtubeUrl: "http://www.youtube.com/embed/",
    baseMovieTrailer:"https://api.themoviedb.org/3/movie/",
    val: {
      api_key: "fb5a22ba28e3a8b761c623cb071fa7a9" 
    },
  }
  const options = '?api_key=fb5a22ba28e3a8b761c623cb071fa7a9';

// List popular movie titles
  app.get('/movies/popular', function(req, res){
    console.log(req.query)
    needle.get(tmdbObj.base2+options + '&page=' + req.query.page, function(err, resp) {
      if(err){
        res.send(Error);
      }else{
        res.send(JSON.stringify(resp.body));
      }
    })
    .on('error', function(req, res) {
      console.log('this is a server error of : ', req.body);
    });
  });

// Search for a movie title
  app.get('/movies/search/:movieName', function(req, res){
    console.log(req.params)
    needle.get(tmdbObj.baseSearchMovie + options + '&query=' + req.params.movieName, function(err, resp){
      return res.send(JSON.stringify(resp.body));
    })
    .on('error', function(req, res) {
      console.log('this is a server error of : ', req.body);
    });
  });

// Get details of a single movie title
  app.get('/movies/movie/:movieId', function(req, res){
    needle.get(tmdbObj.baseMovie + '/' + req.params.movieId + options, function(err, resp){
      res.send(JSON.stringify(resp.body));
      res.end();
    })
    .on('error', function(req, res) {
      console.log('this is a server error of : ', req.body);
    });
  });

  app.get('/movies/movie/similar/:movieId', function(req, res){
    console.log(req.params)
    needle.get(tmdbObj.baseMovie + '/' + req.params.movieId + '/similar' + options, function(err, resp){
      res.send(JSON.stringify(resp.body));
    })
  });

// Recommendation engine
  // var similar = function(e){
  //   console.log("This is e: ",e);
  //   needle.get(tmdbObj.baseMovie + '/' + e + '/similar' + options, function(err, resp){
  //     var similarMovies = resp.body;
  //     return similarMovies;
  //   })
  //   .on('error', function(req, res) {
  //     console.log('this is a server error of : ', req.body);
  //   });
  // }

}

run(process.cwd());