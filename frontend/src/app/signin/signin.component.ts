import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { environment } from '@environment';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private logInService: LoginService, private router: Router, private authService: AuthService) { }
  userName = '';
  singInForm = new FormControl();
  ngOnInit(): void {
  }

  singInUser(signInForm: NgForm) {
    if (signInForm.valid) {
      const userName = signInForm.form.controls?.['userName']?.value;
      const userPassword = signInForm.form.controls?.['userPassword']?.value;
      const QueryPrms: Object = {
        email: userName,
        password: userPassword,
      }

      this.authService.logInUser(QueryPrms).subscribe(
        (success: any) => {
          if (success.logIn) {
            this.authService.storeJWT(success);
            this.router.navigate(['home']);
          }
        }, (error: any) => {
          console.log(error,"error");
        });
     
    }
  }

}
