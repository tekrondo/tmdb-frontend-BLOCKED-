import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  @Input() movie: MoviesService;
  iGotService(){
    this.moviesService.sendMovieId()
  }
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.iGotService()
  }

}
