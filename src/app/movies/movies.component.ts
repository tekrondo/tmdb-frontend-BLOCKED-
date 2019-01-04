import { Component, OnInit } from '@angular/core';
import { MoviesService  } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieName: string;
  moviePage: number;
  total_pages: number;
  newPage: number;
  similarMovieResults = <any>[];
  moviesResults = <any>{};
  moviesResultsState = false;
  movieState = false;
  oneMovie = <any>{};
  noMovies = true;

  constructor(private moviesService: MoviesService) {
    
  }

  getPopularMovies() {
    this.moviesResultsState = true
    this.moviesResults = {};
    this.moviesService.getPopular(1)
    .subscribe((movies) => {
      // this.newPage = movies.page
      this.noMovies = false;
      this.moviesResults = movies;
      console.log(movies);
    });
  }

  more(moviePage: number){
    console.log(moviePage)
    // this.moviesService.getPopular()
    this.moviesService.getPopular(moviePage)
    .subscribe((movies) =>{
      this.moviesResults = movies;
      console.log(movies, "Moveis on page " + moviePage);
    });
  }

  ngOnInit() {
    this.getPopularMovies();
  }
}