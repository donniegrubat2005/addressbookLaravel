import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(
    private http: HttpClient,
    private httpHelperService: HttpHelperService
  ) {}

  public getContacts(): Observable<any[]> {
    let url = this.httpHelperService.getApiUrl() + '/api/Contact/GetContacts';
    return this.http.get<any[]>(url);
  }
}
