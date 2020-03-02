import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders
} from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('inside login');
    return this.loginService.loggedInUser.pipe(
      take(1),
      exhaustMap(user => {
        // if (!user) {
        //   return next.handle(req);
        // }
        const modifiedReq = req.clone({
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s',
              })

        });
        return next.handle(modifiedReq);
      })
    );
  }
}
