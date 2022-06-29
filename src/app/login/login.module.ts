import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  providers: [LoginService],
  exports: [],
})
export class LoginModule {}
