import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  animate,
  style,
  transition, trigger
} from '@angular/animations';


import {Router} from '@angular/router';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  form: FormGroup;
  headerMessage = 'Enter Credentials';
  headerTextColor = 'white';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    console.log('form ', this.form.value);
    const {user, password} = this.form.value;
    const success = this.authService.authenticate(user, password);
    if (success) {
      this.router.navigateByUrl('/product/list');
    } else {
      this.headerMessage = 'Login failed - invalid credentials';
      this.headerTextColor = 'red';
    }
  }

  getHeaderTextColor() {
    return this.headerTextColor;
  }

  resetHeaderMessage() {
    this.headerMessage = 'Enter Credentials';
    this.headerTextColor = 'white';
  }

}
