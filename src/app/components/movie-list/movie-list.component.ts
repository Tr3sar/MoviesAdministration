import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieId: string = "";

  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {}

  filterMovies() {
    let value = (<HTMLInputElement> document.getElementById('input-text')).value;
    this.moviesService.searchData(value);
  }

  setMovieId(title: string) {
    this.movieId = title;
  }

}
