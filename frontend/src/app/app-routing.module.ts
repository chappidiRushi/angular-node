import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { SigninComponent } from './signin/signin.component'


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SigninComponent },
  { path: 'main', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [CanActivateGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
