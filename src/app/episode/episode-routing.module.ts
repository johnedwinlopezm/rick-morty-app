import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesComponent } from './screens/episodes/episodes.component';

const routes: Routes = [
  { path: 'list', component: EpisodesComponent},
  //{ path: 'info', component: InfoCharacterComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule { }
