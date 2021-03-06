import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {tap} from 'rxjs/internal/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = sessionStorage.getItem("access_token");
    if(accessToken)
    {
        request = request.clone({
        setHeaders: {
            Authorization: `Bearer ${accessToken}`
        }
        });
    }

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 403) {
            this.router.navigate(['login']);
          }
        }
      }) 
    );
    
  }
}