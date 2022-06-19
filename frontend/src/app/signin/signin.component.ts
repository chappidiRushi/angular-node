import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { environment } from '@environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private logInService: LoginService, private router: Router ) { }
  userName = '';
  singInForm = new FormControl();
  ngOnInit(): void {
    console.log("baseUrl",environment.baseUrl);
  }

  singInUser(signInForm: NgForm) {
    if (signInForm.valid) {
      const userName = signInForm.form.controls?.['userName']?.value;
      const userPassword = signInForm.form.controls?.['userPassword']?.value;
      const QueryPrms: Object = {
        email: userName,
        password: userPassword
      }
      this.logInService.logInUser("api/login", QueryPrms).subscribe((data: Object) => console.log(data));
      this.router.navigate(['home']);
    }
  }

}
