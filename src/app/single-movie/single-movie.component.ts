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
  }

  getSingleMovie(movieId) {
    this.moviesService.getOneMovie(movieId)
    .subscribe((movie) => {
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