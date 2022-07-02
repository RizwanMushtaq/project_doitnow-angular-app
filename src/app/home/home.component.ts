import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { TodoInterface } from '../libs/types/todo.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoList: TodoInterface[];
  constructor(private homeService: HomeService) {}

  async ngOnInit(): Promise<void> {
    this.homeService.getTodos().subscribe({
      next: (data) => {
        console.log(data);
        return (this.todoList = data);
      },
      error: (error) => console.log(error),
    });
  }
}
