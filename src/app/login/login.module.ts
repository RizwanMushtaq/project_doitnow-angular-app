import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthModule],
  providers: [LoginService],
  exports: [],
})
export class LoginModule {}
