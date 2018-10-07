import { Component, OnInit } from '@angular/core';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tmdb-frontend';
  // moviesPopular: popularMovies[];
  constructor(private moviesService: MoviesService) {}

  getPopularMovies() {
    this.moviesService.getPopular()
    .subscribe((movies) => {
      console.log(movies);
    });
  }

  ngOnInit() {
    this.getPopularMovies();
  }
}
