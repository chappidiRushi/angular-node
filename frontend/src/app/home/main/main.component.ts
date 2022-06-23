import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private auth: AuthService, private reqService: RequestService) { }
  getUserData() {

    this.reqService.getUserData({}).subscribe((res: any) => {
      console.log(res);

    },
      (error: any) => {
        console.log(error);
      }
    )
  }
  ngOnInit(): void {
  }

}
