import { Component } from '@angular/core';
import { Result } from '../../models/result';
import { EpisodeDto } from '../../models/espisode';
import { FormControl, FormGroup } from '@angular/forms';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent {
  title = 'List of Episodes Rick y Morty Serie';
  prevButton = 'Prev';
  nextButton = 'Next';
  resultEpisode!: Result;
  listEpisodes!: EpisodeDto[];
  filterButton = 'Filter';
  cleanFilterButton = 'Clear';

  formFiltros = new FormGroup({
    name: new FormControl(),
    episode:new FormControl()
  });

  constructor(private episodesService: EpisodesService){

  }

  ngOnInit(): void {
   this.allEpisodes();
  }

  private allEpisodes() {
    this.episodesService.all().subscribe(result => {
      if (result) {
        this.resultEpisode = result;
        this.listEpisodes = this.resultEpisode.results;
      }
    });
  }

  prevEpisode(url:string) {
    this.episodesService.getPrevOrNextEpisode(url).subscribe( result=> {
      if(result) {
        this.resultEpisode = result;
        this.listEpisodes = this.resultEpisode.results;
      }
     });
  }

  nextEpisode(url:string) {
    this.episodesService.getPrevOrNextEpisode(url).subscribe( result=> {
      if(result) {
        this.resultEpisode = result;
        this.listEpisodes = this.resultEpisode.results;
      }
     });
  }

  filter() {
    const values = this.formFiltros.getRawValue();
    let parameters = '/?';
    if(values.name) {
      parameters = `${parameters}name=${values.name}`;
    }
    if(values.episode) {
      parameters = parameters === '/?' ? `${parameters}episode=${values.episode}` : `${parameters}&episode=${values.episode}`;
    }
    this.episodesService.getFiltersEpisode(parameters).subscribe( result=> {
      if(result) {
        this.resultEpisode = result;
        this.listEpisodes = this.resultEpisode.results;
      }
     });
  }

  clearFilter() {
    this.formFiltros.reset();
    this.allEpisodes();
  }
}
