import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Primes } from './primes';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PrimesService {
  baseUrl = 'api/primes';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PrimesService');
  }

  getPrimes (n: number): Observable<Primes> {
    const url = `${this.baseUrl}/${n}`;
    //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    //return this.http.get<Primes[]>(url, httpOptions)
    return this.http.get<Primes>(url)
      .pipe(
        catchError(this.handleError('getPrimes'))
      );
  }
}
