import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(private http: HttpClient) { }

  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  get<T>(url: string, headers?: HttpHeaders) {
    return this.http.get<T>(url, { headers: headers || this.defaultHeaders })
      .pipe(catchError(this.handleError));
  }

  post<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.post<T>(url, body, { headers: headers || this.defaultHeaders })
      .pipe(catchError(this.handleError));
  }

  put<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.put<T>(url, body, { headers: headers || this.defaultHeaders })
      .pipe(catchError(this.handleError));
  }

  delete<T>(url: string, headers?: HttpHeaders) {
    return this.http.delete<T>(url, { headers: headers || this.defaultHeaders })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    return throwError(() => error);
  }
}
