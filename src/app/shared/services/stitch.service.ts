import {Injectable} from '@angular/core';

import {
  Stitch,
  StitchAppClient,
  AnonymousCredential,
} from 'mongodb-stitch-browser-sdk';


@Injectable({
  providedIn: 'root'
})
export class StitchService {
  client: StitchAppClient;

  constructor() {
    this.initialize();
  }

  private initialize() {
    try {
      console.log('stitch initialize');
      this.client = Stitch.initializeDefaultAppClient('mdlitedemo-bdomk');
      this.client.auth.loginWithCredential(new AnonymousCredential())
        .then(user => {
          console.log('logged in');
        })
        .catch(err => console.log('stitch err', err));


    } catch (e) {
      console.log('Stitch Start up app error', e);

    }

  }
}
