// src/app/services/blob.service.ts
import { Injectable } from '@angular/core';
import { HttpService } from './api/http.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlobService {

  constructor(private httpService: HttpService) { }

  uploadFileToBlob(containerName: string, formData: FormData, headers?: any): Observable<any> {
    const apiURL = `/api/Common/upload?containerName=${containerName}`;

    // Use HttpService.post
    return this.httpService.post<any>(apiURL, formData, headers)
      .pipe(
        tap(response => console.log('File Uploaded Successfully', response))
      );
  }
}
