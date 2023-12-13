import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesService } from './services/episodes.service';
import { TitlesTableComponent } from './components/titles-table/titles-table.component';
import { InfoComponent } from './components/info/info.component';
import { SharedModule } from '../shared/shared.module';
import { EpisodesComponent } from './screens/episodes/episodes.component';


@NgModule({
  declarations: [
    InfoComponent,
    TitlesTableComponent,
    EpisodesComponent,

  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    SharedModule
  ],
  providers:[
    EpisodesService
  ]
})
export class EpisodeModule { }
