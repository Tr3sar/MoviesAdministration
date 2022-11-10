import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss']
})
export class MovieDescriptionComponent implements OnInit, OnChanges {

  @Input() movieId: string = '';
  movieSelected!: Movie;

  constructor(private moviesService: MoviesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.movieId !== '') {
      this.moviesService.getMovieById(this.movieId).subscribe((movie) => {
        this.movieSelected = movie;
      });
    }
  }

  ngOnInit(): void {
  }

}
