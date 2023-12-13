import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharactersComponent } from './screens/characters/characters.component';
import { CharacterService } from './services/character.service';
import { InfoComponent } from './components/info/info.component';
import { SharedModule } from '../shared/shared.module';
import { TitlesTableComponent } from './components/titles-table/titles-table.component';
import { InfoCharacterComponent } from './screens/info-character/info-character.component';


@NgModule({
  declarations: [
    CharactersComponent,
    InfoComponent,
    TitlesTableComponent,
    InfoCharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule
  ],
  providers:[
    CharacterService
  ]
})
export class CharacterModule { }
