import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.warn("this shold not empty");
    
    // window.document.oncontextmenu = (event) => {
    //   console.log(event);
    //   event.preventDefault();
    //   // event.
    // }
  }

}
