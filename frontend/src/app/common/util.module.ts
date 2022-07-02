import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';



@NgModule({
  declarations: [
    AlertComponent,
    ContextMenuComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AlertComponent,
    ContextMenuComponent
  ]
})
export class UtilModule { }
