import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { EpisodeDto } from '../models/espisode';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../shared/services/base.service';
import { Result } from '../models/result';
import { Observable } from 'rxjs';

@Injectable()
export class EpisodesService extends BaseService {
  private uriEpisode = `${environment.apibase}/episode`;
  private episode!: EpisodeDto;
 

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }

  all(): Observable<Result>{
    return this.doGet(`${this.uriEpisode}`);
  }

  getEpisode(id : number): Observable<EpisodeDto> {
    return this.doGet(`${this.uriEpisode}/${id}`);
  }

  getPrevOrNextEpisode(url:string): Observable<Result>{
    return this.doGet(`${url}`);
  }

  getFiltersEpisode(parameters:string): Observable<Result> {
    return this.doGet(`${this.uriEpisode}${parameters}`);
  }

  public getEpisodeInfo(): EpisodeDto {
    return this.episode;
  }
  public setEpisode(value: EpisodeDto) {
    this.episode = value;
  }
}
