import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { CharacterService } from '../../services/character.service';
import { MockCharacterServices } from '../../mocks/character-mocks';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      imports:[FormsModule, ReactiveFormsModule],
      providers:[
        { provide: CharacterService, useClass: MockCharacterServices}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('next character', () => {
    component.nextCharacter('');
    expect(component.resultCharacter).not.toBeNull
    expect((<any>component).characterService.getPrevOrNextCharacter).toHaveBeenCalledTimes(1);
  })

  it('prev character', () => {
    component.prevCharacter('');
    expect(component.resultCharacter).not.toBeNull
    expect((<any>component).characterService.getPrevOrNextCharacter).toHaveBeenCalledTimes(1);
  })
});
