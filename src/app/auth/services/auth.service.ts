import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private loggedInUserSubject = new BehaviorSubject<User>(undefined);
  private isLoggedIn = false;
  private LOGGED_IN_USER_KEY = 'matLiteDemoLoggedInUser';
  private users: User[] = [
    {
      userName: 'useradmin',
      password: 'test',
      fullName: 'Jill Smith',
      admin: true
    },
    {
      userName: 'user',
      password: 'test',
      fullName: 'John Smith',
      admin: false
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
      const loggedInUserNoPw: User = {
        userName: userFound.userName,
        fullName: userFound.fullName,
        admin: userFound.admin
      };
      this.loggedInUserSubject.next(loggedInUserNoPw);
      this.isLoggedIn = true;
      localStorage.setItem(this.LOGGED_IN_USER_KEY, JSON.stringify(loggedInUserNoPw));
      return true;
    } else {
      return false;
    }

  }

  public logout(): void {
    this.isLoggedIn = false;
    this.loggedInUserSubject.next(undefined);
    localStorage.removeItem(this.LOGGED_IN_USER_KEY);
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  public attemptLogin() {
    const userString = localStorage.getItem(this.LOGGED_IN_USER_KEY);
    if (userString) {
      const user: User = JSON.parse(userString);
      this.isLoggedIn = true;
      this.loggedInUserSubject.next(user);
    }
  }
}
