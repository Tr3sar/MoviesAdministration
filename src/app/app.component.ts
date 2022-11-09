import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesAdministration';

  goToTMDB() {
    var win = window.open('https://www.themoviedb.org/', '_blank');
    win?.focus();
  }
}
