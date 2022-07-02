import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { CalenderComponent } from './calender/calender.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CalenderService } from './calender/calender.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [HomeComponent, CalenderComponent, TodoListComponent],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [HomeService, CalenderService],
  exports: [],
})
export class HomeModule {}
