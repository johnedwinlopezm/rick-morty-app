import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  title = 'Technical test Rick y Morty';

  constructor(private router: Router){
  }

  characters(){
    this.router.navigate(['dashboard/character/list']);
  }

  episodes(){
    this.router.navigate(['dashboard/episode/list']);
  }

  locations() {
    this.router.navigate(['dashboard/location/list']);
  }
}
