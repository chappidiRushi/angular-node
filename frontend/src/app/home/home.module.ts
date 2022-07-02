import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { UtilModule } from '../common/util.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UtilModule
  ]
})
export class HomeModule { }
