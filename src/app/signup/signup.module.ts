import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { SignupService } from './signup.service';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [CommonModule, ReactiveFormsModule, AppRoutingModule],
  providers: [SignupService],
  exports: [],
})
export class SignupModule {}
