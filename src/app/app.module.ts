import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './mat-module';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LibsModule } from './libs/libs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    LoginModule,
    SignupModule,
    HomeModule,
    LibsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
