import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  public getIsLoggedAsObservable(): Observable<boolean> {
    return this.isLoggedIn.asObservable();

  }

  public authenticate(user: string, password: string): boolean {
    console.log('user:' + user + ' password:' + password);
    if (user === 'user' && password === 'test') {
      this.isLoggedIn.next(true);
      return true;
    } else {
      return false;
    }

  }
}
