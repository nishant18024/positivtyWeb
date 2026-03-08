import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpService) { }

    completeProfile(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.USER_COMPLETE_PROFILE}`, payload);
    }

    setProfilePassword(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.USER_SET_PASSWORD}`, payload);
    }

    addVoucher(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.VOUCHER_ADD}`, payload);
    }

    getProfile(patientId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}${API_ENDPOINTS.GET_PATIENT_PROFILE}/${patientId}`);
    }

    saveProfileData(payload: any): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.SAVE_PATIENT_PROFILE}`, payload);
    }

    uploadFile(formData: FormData, containerName: string): Observable<any> {
        return this.http.post(`${this.baseUrl}${API_ENDPOINTS.COMMON_UPLOAD_FILE}?containerName=${containerName}`, formData);
    }
}
