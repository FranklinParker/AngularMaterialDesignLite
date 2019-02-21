import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getIsLoggedAsObservable()
      .subscribe((loggedIn: boolean) => {
        console.log('isLoggedIn:' + loggedIn)
        this.isLoggedIn = loggedIn;
      });
  }

}
