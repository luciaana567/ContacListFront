import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { configHttpService } from 'src/app/modules/service/config-http.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(
    private httpClient: HttpClient,
    private configHttpService: configHttpService
  ) {}

  postPerson(value: any): Observable<any> {
    const body = JSON.stringify(value);

    return this.httpClient
      .post(
        'http://localhost:8080/api/person',
        body,
        this.configHttpService.httpOptions()
      )
      .pipe(catchError(this.configHttpService.handleError));
  }

  getPersonById(value: number): Observable<any> {
    return this.httpClient
      .get(
        `http://localhost:8080/api/person/${value}`,
        this.configHttpService.httpOptions()
      )
      .pipe(catchError(this.configHttpService.handleError));
  }

  putPersonById(valueId: number, valueBody: any): Observable<any> {
    const body = JSON.stringify(valueBody);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .put(`http://localhost:8080/api/person/${valueId}`, body, {
        headers: headers,
        responseType: 'text',
      })
      .pipe(catchError(this.configHttpService.handleError));
  }
}
