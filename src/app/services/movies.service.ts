import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl = 'https://api.themoviedb.org/3/movie/'
  apiKey = '9de91dffec28830cdaaf7ecc3225502e'

  constructor(private http: HttpClient) { }

  getPopularMovies() : Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.baseUrl + 'popular?api_key=' + this.apiKey + '&language=es-ES&page=1');
  }
}
