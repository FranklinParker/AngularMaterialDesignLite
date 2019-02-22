import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.getIsLoggedAsObservable()
      .subscribe((loggedIn: boolean) => {
        console.log('isLoggedIn:' + loggedIn)
        this.isLoggedIn = loggedIn;
      });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
