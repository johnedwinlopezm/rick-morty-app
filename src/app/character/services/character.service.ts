import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { environment } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterDto } from '../models/character';
import { Result } from '../models/result';

@Injectable()
export class CharacterService extends BaseService {

  private uriCharacter = `${environment.apibase}/character`;
  private character!: CharacterDto;
 

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }

  all(): Observable<Result>{
    return this.doGet(`${this.uriCharacter}`);
  }

  getCharacter(id : number): Observable<CharacterDto> {
    return this.doGet(`${this.uriCharacter}/${id}`);
  }

  getPrevOrNextCharacter(url:string): Observable<Result>{
    return this.doGet(`${url}`);
  }

  getFiltersCharacter(parameters:string): Observable<Result> {
    return this.doGet(`${this.uriCharacter}${parameters}`);
  }

  public getCharacterInfo(): CharacterDto {
    return this.character;
  }
  public setCharacter(value: CharacterDto) {
    this.character = value;
  }
}
