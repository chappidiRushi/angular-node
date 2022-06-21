import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: String = environment.baseUrl
  constructor(private http: HttpClient,) {
    // this.baseUrl = ;
  }
  generateUrl(path: String, perms: any) {
    const queryPerms = (Object.keys(perms).length > 0) ? `?${new URLSearchParams(perms).toString()}` : "";
    return `${this.baseUrl}${path}${queryPerms}`;
  }
  logInUser(path: String, queryPerms: Object): any {
    return this.http.get(this.generateUrl(path, queryPerms))
  }
}
