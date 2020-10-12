import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/pre-auth/home/home.component';
import { LoginComponent } from './Components/pre-auth/login/login.component';
import { RegistrationComponent } from './Components/pre-auth/registration/registration.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
