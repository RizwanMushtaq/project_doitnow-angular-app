import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { CalenderComponent } from './calender/calender.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CalenderService } from './calender/calender.service';

@NgModule({
  declarations: [HomeComponent, CalenderComponent, TodoListComponent],
  imports: [CommonModule],
  providers: [HomeService, CalenderService],
  exports: [],
})
export class HomeModule {}
