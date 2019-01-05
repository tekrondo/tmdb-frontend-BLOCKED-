import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


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
    private router: Router
  ) {
    this.movie = {};
    this.similarMovies = [];

    // This section is to handle the loading of a single movie from the similar movies displayed
    // The way the component is initially designed, it loads the single movie from the main display
    // on Init, but does not load the single movie while in the single Movie component display
    // These event handlers take the routes and parse it to get the movie Id and then call the 
    // getSingleMovie function.
    // This is a hack and a more suitable way would be researched to solve for this.

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        var routerUrl = event.url
        var movieId:number  = parseInt(routerUrl.substr(routerUrl.lastIndexOf('/') + 1), 10);
        this.getSingleMovie(movieId)
      }

      if (event instanceof NavigationEnd) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }

      if (event instanceof NavigationError) {
          console.log(event.error);
      }
      this.noMovies = true;
  });
  }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.getSingleMovie(parseInt(id, 10));
    console.log(id, "ngOnInit");

  //   this.router.events.subscribe((evt) => {
  //     if (!(evt instanceof NavigationEnd)) {
  //         return;
  //     }
  //     window.scrollTo(0, 0)
  // });
  }

  getSingleMovie(movieId: number) {
    this.movie = '';
    this.noMovies = true;
    this.moviesService.getOneMovie(movieId)
    .subscribe((movie) => {
      movie.backdrop_path = `https://image.tmdb.org/t/p/original${ movie.backdrop_path }`
      this.movie = movie;
    });
    this.moviesService.getSimilar(movieId)
    .subscribe((movies) => {
      // console.log('SIMILAR______________________', movies)
      this.similarMovies = movies.results;
      this.noMovies = false;
      console.log(this.similarMovies, "************************************************")
    });
  }

  setMyStyles() {
    let styles = {
      'width': '100%',
      'height': '100%',
      'background-image': `url(${this.movie.backdrop_path})`,
      'background-attachment': 'fixed',
      'background-position': 'center',
      'margin-top': '56px',
      'margin-bottom': '5px',

    };

    return styles;
  }

}
