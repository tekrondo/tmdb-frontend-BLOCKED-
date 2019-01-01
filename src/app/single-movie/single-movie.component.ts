import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movie: any;
  similarMovies: any[];
  noMovies: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
  ) {
    this.movie = {};
    this.similarMovies = [];
  }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.getSingleMovie(parseInt(id, 10));
    console.log(id);
  }

  getSingleMovie(movieId) {
    this.movie = '';
    this.moviesService.getOneMovie(movieId)
    .subscribe((movie) => {
      this.noMovies = false;
      
      this.movie = movie;
    });
    this.moviesService.getSimilar(movieId)
    .subscribe((movies) => {
      // console.log('SIMILAR______________________', movies)
      this.similarMovies = movies.results;
      console.log(this.similarMovies, "************************************************")
    });
  }

}
