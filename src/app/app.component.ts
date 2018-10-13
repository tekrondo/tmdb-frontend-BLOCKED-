import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'tmdb-frontend';
  constructor(private moviesService: MoviesService) {}
  movieName: string;
  newPage: number;
  similarMovieResults = {
    "results": {}
  };
  // similar = this.similarMovieResults.results;
  moviesResults = {};
  moviesResultsState = false;
  movieState = false;
  oneMovie = {};

  getPopularMovies() {
    this.moviesResultsState = true
    this.moviesResults = {};
    this.moviesService.getPopular(1)
    .subscribe((movies) => {
      // this.newPage = movies.page
      this.moviesResults = movies;
      console.log(movies);
    });
  }

  searchMovie(x:string) {
    this.moviesResults = {};
    this.moviesResultsState = true
    this.movieState = false;
    this.moviesService.findMovie(x)
    .subscribe((movies) =>{
      this.moviesResults = movies;
      console.log(movies);
    })
    // this.movieName = '';
  }

  more(page: number){
    console.log(page)
    // this.moviesService.getPopular()
    this.moviesService.getPopular(page)
    .subscribe((movies) =>{
      this.moviesResults = movies;
      console.log(movies, "Moveis on page " + page);
    });
  }
  singleMovie(movieID) {
    this.moviesResults = {};
    this.moviesResultsState = false
    this.movieState = true;
    this.moviesService.getOneMovie(movieID)
    .subscribe((movie) => {
      this.moviesResults = {};
      this.oneMovie = movie;
      console.log(movie);
    });
    this.moviesService.getSimilar(movieID)
    .subscribe((movies) => {
      this.similarMovieResults.results = movies.results
      console.log(this.similarMovieResults, "Similar movies");
    });
  }

  ngOnInit() {
    this.getPopularMovies();
  }
}
