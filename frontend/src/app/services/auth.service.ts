import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) {

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
    console.log(data.token);
    localStorage.setItem('token', data.token);
  }

  deleteJWT(): void {
    localStorage.removeItem('token');
  }

  getTokenOrLogOut() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    this.logOutUser();
    return null;
  }

  logOutUser() {
    this.deleteJWT();
    this.router.navigate(['login']);
    return null;
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
