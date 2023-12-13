import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { Result } from '../../models/result';
import { FormControl, FormGroup } from '@angular/forms';
import { LocationDto } from '../../models/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})
export class LocationsComponent implements OnInit {
  title = 'List of locations Rick y Morty Serie';
  prevButton = 'Prev';
  nextButton = 'Next';
  resultLocation!: Result;
  listLocations!: LocationDto[];
  filterButton = 'Filter';
  cleanFilterButton = 'Clear';

  formFiltros = new FormGroup({
    name: new FormControl(),
    dimension:new FormControl(),
    type:new FormControl()
  });

  constructor(private locationService: LocationService){

  }

  ngOnInit(): void {
   this.allLocations();
  }

  private allLocations() {
    this.locationService.all().subscribe(result => {
      if (result) {
        this.resultLocation = result;
        this.listLocations = this.resultLocation.results;
      }
    });
  }

  prevlocation(url:string) {
    this.locationService.getPrevOrNextLocation(url).subscribe( result=> {
      if(result) {
        this.resultLocation = result;
        this.listLocations = this.resultLocation.results;
      }
     });
  }

  nextlocation(url:string) {
    this.locationService.getPrevOrNextLocation(url).subscribe( result=> {
      if(result) {
        this.resultLocation = result;
        this.listLocations = this.resultLocation.results;
      }
     });
  }

  filter() {
    const values = this.formFiltros.getRawValue();
    let parameters = '/?';
    if(values.name) {
      parameters = `${parameters}name=${values.name}`;
    }
    if(values.type) {
      parameters = parameters === '/?' ? `${parameters}type=${values.type}` : `${parameters}&type=${values.type}`;
    }
    if(values.dimension) {
      parameters = parameters === '/?' ? `${parameters}dimension=${values.dimension}` : `${parameters}&gender=${values.dimension}`;
    }
    this.locationService.getFiltersLocation(parameters).subscribe( result=> {
      if(result) {
        this.resultLocation = result;
        this.listLocations = this.resultLocation.results;
      }
     });
  }

  clearFilter() {
    this.formFiltros.reset();
    this.allLocations();
  }
}
