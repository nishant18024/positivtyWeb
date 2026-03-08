import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CareerService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpService) { }

    getJobDetails(employmentType: string, roleType: string = '', jobLocation: string = ''): Observable<any> {
        const url = `${this.baseUrl}${API_ENDPOINTS.GET_JOBS}?EmploymentType=${employmentType}&RoleType=${roleType}&JobLocation=${jobLocation}`;
        return this.http.get(url);
    }

    getJobById(jobId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}${API_ENDPOINTS.GET_JOB_BY_ID}/${jobId}`);
    }

    applyJob(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.APPLY_JOB}`, payload);
    }
}
