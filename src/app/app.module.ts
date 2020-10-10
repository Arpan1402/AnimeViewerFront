import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/pre-auth/home/home.component';
import { LoginComponent } from './Components/pre-auth/login/login.component';
import { RegistrationComponent } from './Components/pre-auth/registration/registration.component';
import { SetupProfileComponent } from './Components/post-auth/profile/setup-profile/setup-profile.component';
import { ViewProfileComponent } from './Components/post-auth/profile/view-profile/view-profile.component';
import { HeaderComponent } from './Components/shared/layouts/header/header.component';
import { FooterComponent } from './Components/shared/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SetupProfileComponent,
    ViewProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
