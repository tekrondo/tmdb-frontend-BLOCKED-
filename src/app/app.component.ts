import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'tmdb-frontend';
  constructor(private moviesService: MoviesService, private location: Location) {}
  movieName: string;
  moviePage: number;
  total_pages: number;
  newPage: number;
  similarMovieResults = <any>[];
  // goBack(e) {
  //   event.preventDefault();
  //   this.location.back();
  //   console.log("Went back One page");
  // }
  // similar = this.similarMovieResults.results;
  moviesResults = <any>{};
  moviesResultsState = false;
  movieState = false;
  oneMovie = <any>{};

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
    console.log(x, "THIS IS THE MOVIE")
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

  // more(moviePage: number){
  //   console.log(moviePage)
  //   // this.moviesService.getPopular()
  //   this.moviesService.getPopular(moviePage)
  //   .subscribe((movies) =>{
  //     this.moviesResults = movies;
  //     console.log(movies, "Moveis on page " + moviePage);
  //   });
  // }
  // onActivate(e, scrollContainer) {
  //   scrollContainer .scrollable._elementRef.nativeElement.scrollTop = 0
  // }
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
      this.similarMovieResults = movies
      console.log(movies, "Similar movies");
    });
  }

  ngOnInit() {
    this.getPopularMovies();
  }
}
