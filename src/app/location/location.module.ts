import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationService } from './services/location.service';
import { InfoComponent } from './components/info/info.component';
import { TitlesTableComponent } from './components/titles-table/titles-table.component';
import { SharedModule } from '../shared/shared.module';
import { LocationsComponent } from './screens/locations/locations.component';


@NgModule({
  declarations: [
    InfoComponent,
    TitlesTableComponent,
    LocationsComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedModule
  ],
  providers:[
    LocationService
  ]
})
export class LocationModule { }
