import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = 'https://tmdb-api-ang.herokuapp.com';

  constructor(private http: HttpClient) { }

  getPopular(){
    return this.http.get(`${this.url}/movies/popular`);
  }
}
