import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, InterceptorsModule],
  providers: [],
  exports: [],
})
export class LibsModule {}
