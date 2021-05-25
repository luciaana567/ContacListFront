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
export class ContactService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private httpClient: HttpClient,
    private configHttpService: configHttpService
  ) {}

  postPerson(value: any): Observable<any> {
    const body = JSON.stringify(value);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .post(`http://localhost:8080/api/contact`, body, {
        headers: headers,
        responseType: 'text',
      })
      .pipe(catchError(this.configHttpService.handleError));
  }

  getContactById(id: any): Observable<any> {
    return this.httpClient
      .get(
        `http://localhost:8080/api/contact/${id}`,
        this.configHttpService.httpOptions()
      )
      .pipe(catchError(this.configHttpService.handleError));
  }

  getAllContactByPerson(id: any): Observable<any> {
    return this.httpClient
      .get(
        `http://localhost:8080/api/contact/person/${id}`,
        this.configHttpService.httpOptions()
      )
      .pipe(catchError(this.configHttpService.handleError));
  }

  putContactById(valueId: string, valueBody: any): Observable<any> {
    const body = JSON.stringify(valueBody);

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient
      .put(`http://localhost:8080/api/contact/${valueId}`, body, {
        headers: headers,
        responseType: 'text',
      })
      .pipe(catchError(this.configHttpService.handleError));
  }

  deleteContactById(id: any): Observable<any> {
    return this.httpClient
      .delete(
        `http://localhost:8080/api/contact/${id}`,
        this.configHttpService.httpOptions()
      )
      .pipe(catchError(this.configHttpService.handleError));
  }
}
