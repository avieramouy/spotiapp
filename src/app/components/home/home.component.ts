import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newReleases: any[] = [];

  constructor(private _spotifyService: SpotifyService) {

    this._spotifyService.getNewReleases().subscribe(response => {
      this.newReleases = response;
    });

   }
}
