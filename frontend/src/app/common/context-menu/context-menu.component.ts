import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
})
export class ContextMenuComponent implements OnInit {
  contextPosition: any = {
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
  }
  contextContainer: any = {
    display:"none"
  }
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    document.oncontextmenu = (e) => {
      e.preventDefault();
      console.log(e);
      this.updateContextPos(e, this.contextPosition);
      this.contextContainer.display = "block";
    }
  }
  hideContext (event:any) {
    console.log(event);
    this.contextContainer.display = "none";
  }
  logOutUser(event: any) {
    this.authService.logOutUser()
  }

  updateContextPos(event: any, contextPosition: any) {
    const containerDiv:any = $("#contextMenu")[0];
    const contextDivHeight = containerDiv.clientHeight;
    const contextDivWidth = containerDiv.clientWidth;
    console.log("log",contextDivHeight,contextDivWidth);
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    if ((mouseX + contextDivWidth) < (windowWidth)) {
      contextPosition.left = `${mouseX}px`;
      contextPosition.right = `auto`;
    } else {
      contextPosition.right = `${windowWidth-mouseX}px`;
      contextPosition.left = `auto`;
    }
    if ((mouseY + contextDivHeight) < (windowHeight)) {
      contextPosition.top = `${mouseY}px`;
      contextPosition.bottom = `auto`;
    } else if (contextDivHeight > windowHeight) {
      contextPosition.top = `0px`;
      contextPosition.bottom = `auto`;
    }else {
      contextPosition.bottom = `${windowHeight-mouseY}px`;
      contextPosition.top = `auto`;
    }
    return {}
  }
}
