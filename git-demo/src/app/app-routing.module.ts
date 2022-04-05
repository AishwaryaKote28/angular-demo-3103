import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { homedir } from 'os';
const routes: Routes = [
  // { path: '', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent,
    // children:[
    //   { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]}
    // ]
  },

   { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
