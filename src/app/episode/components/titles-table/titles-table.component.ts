import { Component } from '@angular/core';

@Component({
  selector: 'app-titles-table',
  templateUrl: './titles-table.component.html',
  styleUrl: './titles-table.component.scss'
})
export class TitlesTableComponent {

  name = 'Name';
  date = 'Air Date';
  episode = 'Episode';
  textButton = 'Actions';
}
