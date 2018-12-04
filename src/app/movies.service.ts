import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = 'http://localhost:5555';
  // url = 'https://tmdb-api-ang.herokuapp.com';

  constructor(private http: HttpClient) { }

  // Get popular movies on TMDB
  // getPopular(): Observable<any>{
  //   return this.http.get<any>(`${this.url}/movies/popular`);
  // }

  getPopular(req: number): Observable<any>{
    console.log(req, "from service");
    let backendString = `${this.url}/movies/popular`;
    if(!req){
      return this.http.get<any>(backendString);
    }else{
      return this.http.get<any>(backendString + '?page=' + req)
    }
  }

  // Search for movies based on search term
  findMovie(movieName: string): Observable<any> {
    return this.http.get<any>(`${this.url}/movies/search/`+ movieName);
  }

  // Get full details of one movie
  getOneMovie(movieId): Observable<any>{
    return this.http.get<any>(`${this.url}/movies/movie/` + movieId)
  }

  // Get similar movies based on the id of another movie.
  getSimilar(movieId): Observable<any> {
    return this.http.get<any>(`${this.url}/movies/movie/similar/` + movieId)
  }
}
