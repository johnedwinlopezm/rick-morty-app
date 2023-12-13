import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';

const routes: Routes = [
  { 
  path: 'dashboard', component: DashboardComponent,
  children: [
    { path: 'character', loadChildren: () => import('../character/character.module').then(m => m.CharacterModule) },
    { path: 'location', loadChildren: () => import('../location/location.module').then(m => m.LocationModule) },
    { path: 'episode', loadChildren: () => import('../episode/episode.module').then(m => m.EpisodeModule) },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
