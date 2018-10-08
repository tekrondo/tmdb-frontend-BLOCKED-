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

  singleMovie(movieID) {
    this.moviesResults = {};
    this.moviesResultsState = false
    this.movieState = true;
    this.moviesService.getOneMovie(movieID)
    .subscribe((movie) => {
      this.moviesResults = {};
      this.oneMovie = movie;
      console.log(movie);
    })
  }

  ngOnInit() {
    this.getPopularMovies();
  }
}
