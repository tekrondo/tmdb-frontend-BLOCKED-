import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

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

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
    ) {
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


  ngOnInit() {
    console.log(this.route.snapshot.params)
    const movieName = this.route.snapshot.params.movieName
    this.searchMovie(movieName);
  }

}
