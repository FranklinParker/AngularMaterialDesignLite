import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {AuthService} from './auth/services/auth.service';
import {routeStateTrigger} from './routingAnimations';
import {StitchService} from './shared/services/stitch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeStateTrigger
  ]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
              private stitchService: StitchService) {
  }

  ngOnInit(): void {
    this.authService.attemptLogin();
  }

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }
}

