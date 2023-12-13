import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

export interface Options {
  headers?: HttpHeaders;
}

export class BaseService {
  private APPLICATION_JSON = 'application/json; charset=utf-8';
  private RETRY = 0;
 
  
  constructor(
    protected http: HttpClient) { }


  protected createDefaultOptions(): Options {
    const headers = new HttpHeaders({
      'Content-Type': this.APPLICATION_JSON,
      'No-Auth': 'True'
    });
    return {
      headers: headers,
    };
  }

  protected doGet<R>(ServiceUrl: string): Observable<R> {
    console.log('url', ServiceUrl);
    return this.http
      .get<R>(ServiceUrl, this.createDefaultOptions())
      .pipe(retry(this.RETRY));
  }

  protected doPost<B, R>(ServiceUrl: string, body: B): Observable<R> {
    return this.http
      .post<R>(ServiceUrl, body, this.createDefaultOptions())
      .pipe(retry(this.RETRY));
  }

  protected doPut<B, R>(ServiceUrl: string, body: B): Observable<R> {
    return this.http
      .put<R>(ServiceUrl, body)
      .pipe(retry(this.RETRY));
  }

  protected doDelete<R>(ServiceUrl: string): Observable<R> {
    return this.http
      .delete<R>(ServiceUrl, this.createDefaultOptions())
      .pipe(retry(this.RETRY));
  }

  protected doPatch<B, R>(ServiceUrl: string, body: B): Observable<R>{
    console.log('body patch: ', body, ' url patch: ', ServiceUrl);
    return this.http
    .patch<R>(ServiceUrl, body,  this.createDefaultOptions())
    .pipe(retry(this.RETRY));
  }
}
