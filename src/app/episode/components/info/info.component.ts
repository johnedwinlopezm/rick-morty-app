import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodesService } from '../../services/episodes.service';
import { EpisodeDto } from '../../models/espisode';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Input() episode!: EpisodeDto;
  textButton = 'See info'

  constructor(private episodesServices: EpisodesService, private router: Router) { }

  viewInfoEpisode() {
    this.episodesServices.setEpisode(this.episode);
    this.router.navigate(['dashboard/episode/info']);
  }
}
