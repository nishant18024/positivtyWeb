import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebinarService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpService) { }

    getWebinars(): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}${API_ENDPOINTS.WEBINAR_LIST}`);
    }

    registerWebinar(payload: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}${API_ENDPOINTS.WEBINAR_REGISTER}`, payload);
    }
}
