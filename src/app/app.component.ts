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
  similarMovieResults = {};
  moviesResults = {};
  moviesResultsState = false;
  movieState = false;
  oneMovie = {};

  getPopularMovies() {
    this.moviesResultsState = true
    this.moviesResults = {};
    this.moviesService.getPopular()
    .subscribe((movies) => {
      this.moviesResults = movies;
      console.log(movies.results);
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

  singleMovie(movieID) {
    this.moviesResults = {};
    this.moviesResultsState = false
    this.movieState = true;
    this.moviesService.getOneMovie(movieID)
    .subscribe((movie) => {
      this.moviesResults = {};
      this.oneMovie = movie;
      // console.log(movie);
    });
    this.moviesService.getSimilar(movieID)
    .subscribe((movies) => {
      this.similarMovieResults = movies
      console.log(movies, "Similar movies");
    });
  }

  ngOnInit() {
    this.getPopularMovies();
  }
}
