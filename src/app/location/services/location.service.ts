import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { environment } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Result } from '../models/result';
import { LocationDto } from '../models/location';
import { Observable } from 'rxjs';

@Injectable()
export class LocationService extends BaseService{
  private uriLocation = `${environment.apibase}/location`;
  private location!: LocationDto;
 

  constructor(protected httpClient: HttpClient) {
    super(httpClient)
  }

  all(): Observable<Result>{
    return this.doGet(`${this.uriLocation}`);
  }

  getLocation(id : number): Observable<LocationDto> {
    return this.doGet(`${this.uriLocation}/${id}`);
  }

  getPrevOrNextLocation(url:string): Observable<Result>{
    return this.doGet(`${url}`);
  }

  getFiltersLocation(parameters:string): Observable<Result> {
    return this.doGet(`${this.uriLocation}${parameters}`);
  }

  public getLocationInfo(): LocationDto {
    return this.location;
  }
  public setLocation(value: LocationDto) {
    this.location = value;
  }
}
