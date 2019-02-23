import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedInUserSubject = new BehaviorSubject<User>(undefined);
  private isLoggedIn = false;
  private users: User[] = [
    {
      userName: 'user',
      password: 'test',
      fullName: 'John Smith'
    }
  ];

  constructor() {
  }

  public getLoggedInUserAsObservable(): Observable<User> {
    return this.loggedInUserSubject.asObservable();

  }

  public authenticate(userName: string, password: string): boolean {
    const userFound = this.users.find((user: User) => user.userName === userName);
    if (userFound && userFound.password === password) {
      this.loggedInUserSubject.next(userFound);
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }

  }

  public logout(): void {
    this.isLoggedIn = false;
    this.loggedInUserSubject.next(undefined);
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
