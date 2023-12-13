import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { LocationDto } from '../../models/location';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Input() location!: LocationDto;
  textButton = 'See info'

  constructor(private locationServices: LocationService, private router: Router) { }

  viewInfoLocation() {
    this.locationServices.setLocation(this.location);
    this.router.navigate(['dashboard/character/info']);
  }
}
