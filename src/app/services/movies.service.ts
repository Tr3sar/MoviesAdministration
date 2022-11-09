import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie, RootObject } from '../interfaces/movies'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = 'https://api.themoviedb.org/3/movie/'
  apiKey = '9de91dffec28830cdaaf7ecc3225502e'

  movies: any;

  constructor(private http: HttpClient) { 
    this.getPopularMovies().subscribe((movies) => {
      this.movies = Object.values(movies)[1];
    })
  }

  getPopularMovies() : Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.baseUrl + 'popular?api_key=' + this.apiKey + '&language=es-ES&page=1');
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(this.baseUrl + '/' + id + '?api_key=' + this.apiKey + '&language=es-ES');
  } 
}
