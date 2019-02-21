import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getIsLoggedAsObservable()
      .pipe(
        tap((loggedIn: boolean) => {
          console.log('logged in:' + loggedIn);
          if (!loggedIn) {
            this.router.navigateByUrl('/login');
          }
        }));


  }
}
