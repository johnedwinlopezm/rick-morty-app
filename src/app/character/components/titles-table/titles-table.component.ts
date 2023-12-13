import { Component } from '@angular/core';

@Component({
  selector: 'app-titles-table',
  templateUrl: './titles-table.component.html',
  styleUrl: './titles-table.component.scss'
})
export class TitlesTableComponent {

  name = 'Name';
  status = 'Status';
  species = 'Species';
  type = 'Type';
  gender = 'Gender';
  textButton = 'Actions';
}
