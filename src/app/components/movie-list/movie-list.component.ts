import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
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

  setMovieId(id: string) {
    this.movieId = id;
    this.setSelectedColor(id);
  }

  setSelectedColor(id: string) {
    let card = document.getElementById(id);

    this.moviesService.movies.forEach((movie: Movie) => {
      let movieCard = document.getElementById(movie.id + "");
      if (movieCard != undefined) {
        movieCard.style.background = 'white';
        movieCard.style.fontWeight = 'normal';
        console.log('a')
      }
    });

    if (card != undefined) {
      card.style.background = 'linear-gradient(to right, #EAECC6, #2BC0E4)';
      card.style.fontWeight = 'bold'
    }
  }

}
