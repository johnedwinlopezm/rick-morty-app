import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './screens/locations/locations.component';

const routes: Routes = [
  { path: 'list', component: LocationsComponent},
  //{ path: 'info', component: InfoCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
