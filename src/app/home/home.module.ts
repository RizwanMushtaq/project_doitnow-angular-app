import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { CalenderComponent } from './calender/calender.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [HomeComponent, CalenderComponent, TodoListComponent],
  imports: [CommonModule],
  providers: [HomeService],
  exports: [],
})
export class HomeModule {}
