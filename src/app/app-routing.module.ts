import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
   {path: '', pathMatch: 'full', redirectTo: 'home'},
   { path: 'home', component: HomeComponent},
   {path: '404', component: PagenotfoundComponent},
   { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
   { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
   { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
   { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
   { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
   {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
