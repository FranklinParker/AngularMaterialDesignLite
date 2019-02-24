import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;

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
      this.errorMessage = 'Login failed - invalid credentials';
    }
  }

}
