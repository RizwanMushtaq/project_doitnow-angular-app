import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './lib/error-page/error-page.component';
import { TitleComponent } from './lib/title/title.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, HomeComponent, ErrorPageComponent, TitleComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
