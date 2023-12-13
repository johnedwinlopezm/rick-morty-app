import { Component } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CharacterDto } from '../../models/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrl: './info-character.component.scss'
})
export class InfoCharacterComponent {
  returnButton='Go back';
  character!: CharacterDto;

   constructor(private characterService: CharacterService, private router:Router) {
     this.character = this.characterService.getCharacterInfo();
   }

   return(){
    this.router.navigate(['dashboard/character/list']);
   }
}
