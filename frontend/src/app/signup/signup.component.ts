import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  userName = '';
  signUpfrom = new FormControl();
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['main']);
    }
  }

  signup(signInForm: NgForm) {
    if (signInForm.valid) {
      const userName = signInForm.form.controls?.['userName']?.value;
      const userEmail = signInForm.form.controls?.['userName']?.value;
      const userPassword = signInForm.form.controls?.['userPassword']?.value;
      const QueryPrms: Object = {
        userName: userName,
        password: userPassword,
        userEmail: userEmail
      }

      this.authService.signupUser(QueryPrms).subscribe({
        next: (success: any) => {
          if (success.logIn) {
            this.authService.storeJWT(success.token);
            return this.router.navigate(['main']);
          }
          return this.authService.logOutUser();
        },
        error: (error: any) => {
          console.log("error");
        }
      });

    }
  }

}
