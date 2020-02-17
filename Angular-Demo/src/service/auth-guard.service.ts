import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';  
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Logger } from './Logger.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private logger: Logger) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(
        (authenticated: boolean) => {
          this.logger.demologger('is authenticated' + authenticated);
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/login']);
          }
        }
      );
  }
}