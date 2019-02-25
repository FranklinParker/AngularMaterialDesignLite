import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getLoggedInUserAsObservable()
      .pipe(
        map((user: User) => {
          if (!user.admin) {
            this.router.navigateByUrl('/product/list');
          }
          return user.admin;
        })
      );
  }
}

/**
 *
 * eturn this.http.get(apiURL) (1)
 .map(res => { (2)
        return res.json().results.map(item => { (3)
          return new SearchItem( (4)
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
          );
        });
      });
 */
