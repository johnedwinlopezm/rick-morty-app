import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { CharacterDto } from '../../models/character';
import { Result } from '../../models/result';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {

  title = 'List of characters Rick y Morty Serie';
  prevButton = 'Prev';
  nextButton = 'Next';
  resultCharacter!: Result;
  listCharacters!: CharacterDto[];
  listStatus : string[] = ['none','alive', 'dead' , 'unknown'];
  listGender : string[] = ['none','female', 'male', 'genderless' , 'unknown'];
  filterButton = 'Filter';
  cleanFilterButton = 'Clear';

  formFiltros = new FormGroup({
    name: new FormControl(),
    status:new FormControl(),
    species:new FormControl(),
    type:new FormControl(),
    gender:new FormControl(),
  });

  constructor(private characterService: CharacterService){

  }

  ngOnInit(): void {
   this.allCharacters();
  }

  private allCharacters() {
    this.characterService.all().subscribe(result => {
      if (result) {
        this.resultCharacter = result;
        this.listCharacters = this.resultCharacter.results;
      }
    });
  }

  prevCharacter(url:string) {
    this.characterService.getPrevOrNextCharacter(url).subscribe( result=> {
      if(result) {
        this.resultCharacter = result;
        this.listCharacters = this.resultCharacter.results;
      }
     });
  }

  nextCharacter(url:string) {
    this.characterService.getPrevOrNextCharacter(url).subscribe( result=> {
      if(result) {
        this.resultCharacter = result;
        this.listCharacters = this.resultCharacter.results;
      }
     });
  }

  filter() {
    const values = this.formFiltros.getRawValue();
    let parameters = '/?';
    if(values.name) {
      parameters = `${parameters}name=${values.name}`;
    }
    if(values.status) {
      parameters = parameters === '/?' ? `${parameters}status=${values.status}` : `${parameters}&status=${values.status}`;
    }
    if(values.species) {
      parameters = parameters === '/?' ? `${parameters}species=${values.species}` : `${parameters}&species=${values.species}`;
    }
    if(values.type) {
      parameters = parameters === '/?' ? `${parameters}type=${values.type}` : `${parameters}&type=${values.type}`;
    }
    if(values.gender) {
      parameters = parameters === '/?' ? `${parameters}gender=${values.gender}` : `${parameters}&gender=${values.gender}`;
    }
    this.characterService.getFiltersCharacter(parameters).subscribe( result=> {
      if(result) {
        this.resultCharacter = result;
        this.listCharacters = this.resultCharacter.results;
      }
     });
  }

  clearFilter() {
    this.formFiltros.reset();
    this.allCharacters();
  }
}
