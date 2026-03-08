import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpService) { }

    startSession(userId: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.SESSION_START}`, { userId });
    }
}
