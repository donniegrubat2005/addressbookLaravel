import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelperService } from './http-helper.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private httpHelperService: HttpHelperService
  ) {}

  public register(user: any) {
    let url = this.httpHelperService.getApiUrl() + '/api/auth/register';
    return this.http.post<any>(url, user);
  }

  public login(user: any) {
    let url = this.httpHelperService.getApiUrl() + '/api/auth/login';
    return this.http.post<any>(url, user);
  }
}
