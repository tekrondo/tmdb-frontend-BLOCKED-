import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movies Reel';

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

  searchMovie(x:string) {
    this.noMovies = true;
    console.log(x, "THIS IS THE MOVIE")
    this.moviesResults = {};
    this.moviesResultsState = true
    this.movieState = false;
    this.moviesService.findMovie(x)
    .subscribe((movies) =>{
      if(movies.total_results == 0){
        console.log('No Movies found')
      }
      this.noMovies = false;
      this.moviesResults = movies;
      console.log(movies);
    })
    this.movieName = ''
  }

}
