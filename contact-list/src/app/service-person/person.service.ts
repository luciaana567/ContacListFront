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
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private httpClient: HttpClient,
    private configHttpService: configHttpService
  ) {}

  postPerson(value: any): Observable<any> {
    const body = JSON.stringify(value);

    console.log(body);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post(`http://localhost:8080/api/person`, body, {
        headers: headers,
        responseType: 'text',
      })
      .pipe(catchError(this.configHttpService.handleError));
  }

  getPersonById(id: any): Observable<any> {
    return this.httpClient
      .get(
        `http://localhost:8080/api/person/${id}`,
        this.configHttpService.httpOptions()
      )
      .pipe(catchError(this.configHttpService.handleError));
  }

  getAllPeople(): Observable<any> {
    return this.httpClient
      .get(
        `http://localhost:8080/api/person`,
        this.configHttpService.httpOptions()
      )
      .pipe(catchError(this.configHttpService.handleError));
  }

  putPersonById(valueId: string, valueBody: any): Observable<any> {
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
