import { Component, Input } from '@angular/core';
import { CharacterDto } from '../../models/character';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {
  @Input() character!: CharacterDto;
  textButton = 'See info'

  constructor(private characterServices: CharacterService, private router: Router) { }

  viewInfoCharacter() {
    this.characterServices.setCharacter(this.character);
    this.router.navigate(['dashboard/character/info']);
  }
}
