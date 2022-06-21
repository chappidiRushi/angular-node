import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient) {

  }

  registerUser(user: any) {
    return this.http.post<any>(`${this.baseUrl}user/register`, user);
  }
  generateUrl(path: String, perms: any) {
    const queryPerms = (Object.keys(perms).length > 0) ? `?${new URLSearchParams(perms).toString()}` : "";
    return `${this.baseUrl}${path}${queryPerms}`;
  }
  logInUser(user: any): Observable<any> {

    return this.http.post<any>(this.generateUrl(`user/login`, {}), user);
  }
  storeJWT(data: any) {

    localStorage.setItem(data.token, 'token')
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
