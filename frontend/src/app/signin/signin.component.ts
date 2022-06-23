import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { environment } from '@environment';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor( private router: Router, private authService: AuthService) { }
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
          console.log(success);
          if (success.logIn) {
            this.authService.storeJWT(success);
           return this.router.navigate(['home']);
          } 
          return this.authService.logOutUser();
        }, (error: any) => {
          console.log(error,"error");
        });
     
    }
  }

}
