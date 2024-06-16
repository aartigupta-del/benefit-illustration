// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name: string ='';
  email: string ='';
  password: string ='';
  errorMessage: string ='';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register({ name: this.name, email: this.email, password: this.password }).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        this.errorMessage = error.error.error;
        console.error(error);
        this.router.navigate(['/login']);
      }
    );
  }
}
