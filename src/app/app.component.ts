import {Component, OnInit} from '@angular/core';

import {AuthService} from './auth/services/auth.service';
import {StitchService} from './shared/services/stitch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
              private stitchService: StitchService) {
  }

  ngOnInit(): void {
    this.authService.attemptLogin();
  }
}

