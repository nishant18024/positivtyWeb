import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EducationService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpService) { }

    /**
     * Submits the education booking form data to the backend
     * @param payload The structured data from the education booking form
     * @returns Observable of the API response
     */
    addEducation(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.EDUCATION_ADD}`, payload);
    }
}
