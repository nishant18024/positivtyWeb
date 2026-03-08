import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { API_ENDPOINTS } from './endpoints';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EnterprisesService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpService) { }

    addEnterprise(enterprise: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}${API_ENDPOINTS.ENTERPRISE_ADD}`, enterprise);
    }

    addVoucherDetails(voucherDetailsList: any[]): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}${API_ENDPOINTS.ENTERPRISE_ADD_VOUCHER_DETAILS}`, voucherDetailsList);
    }

    addVoucherCodesFromDetails(voucherDetailsList: any[]): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}${API_ENDPOINTS.ENTERPRISE_ADD_VOUCHER_CODES}`, voucherDetailsList);
    }
}
