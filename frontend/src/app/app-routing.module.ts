import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { SigninComponent } from './signin/signin.component'
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'auth/login', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'main', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [CanActivateGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
