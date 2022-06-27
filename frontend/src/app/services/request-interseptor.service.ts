import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterseptorService implements HttpInterceptor{
  unAuthorizedRequest: number = 401;
  constructor(private authService: AuthService, private router: Router) {
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getTokenOrLogOut();
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(tokenizedReq).pipe(tap((event:any) => {
      // const status: number = event.status || 0;
    }, (error) => {
      if (error.status === 401) {
        console.log("Token Expired");
        this.authService.logOutUser();
      }
    }))
    // throw new Error('Method not implemented.');
  }
}
