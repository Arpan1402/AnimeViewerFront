import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/pre-auth/home/home.component';
import { LoginComponent } from './Components/pre-auth/login/login.component';
import { RegistrationComponent } from './Components/pre-auth/registration/registration.component';
import { ProfileComponent } from './Components/post-auth/profile/profile.component';
import { AnimeListComponent } from './Components/pre-auth/anime-list/anime-list.component';
import { AnimePageComponent } from './Components/pre-auth/anime-page/anime-page.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'animeList',component:AnimeListComponent},
  {path:'animePage',component:AnimePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
