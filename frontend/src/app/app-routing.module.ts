import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component'
import{MainComponent} from'./home/main/main.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', 
    component: SigninComponent,
    // children: [
    //   { path: 'childpath', component: ChildComponent }
    // ]
  },
  { path: 'home', component: MainComponent ,canActivate:[]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
