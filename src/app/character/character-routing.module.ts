import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './screens/characters/characters.component';
import { InfoCharacterComponent } from './screens/info-character/info-character.component';

const routes: Routes = [
  
  { path: 'list', component: CharactersComponent},
  { path: 'info', component: InfoCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
