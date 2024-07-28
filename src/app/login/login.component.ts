import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(response => {
      if (response.success) {
        console.log('Login successful!');
      } else {
        console.log('Login failed!');
      }
    });
  }

  signInWithGoogle() {
    console.log('Sign in with Google');
  }

  signInWithFacebook() {
    console.log('Sign in with Facebook');
  }
}
