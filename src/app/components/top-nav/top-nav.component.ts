import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../auth/models/user';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.getLoggedInUserAsObservable()
      .subscribe((user: User) => {
        console.log('user:' + user);
        this.user = user;
      });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
}
