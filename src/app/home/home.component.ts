import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { TodoInterface } from '../libs/types/todo.interface';
import { format } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todoList: TodoInterface[];
  uniqueDatesList: string[];
  constructor(private homeService: HomeService) {}

  async ngOnInit(): Promise<void> {
    this.homeService.getTodos().subscribe({
      next: (data) => {
        this.uniqueDatesList = this.getUniqueDatesList(data);
        this.todoList = data;
        console.log(this.todoList);
        console.log(this.uniqueDatesList);
      },
      error: (error) => console.log(error),
    });
  }

  private getUniqueDatesList(list: TodoInterface[]) {
    const datesList: Date[] = list.map((todo) => todo.date);
    const GMTDatesList = datesList.map((date) => new Date(date));
    const formattedDatesList = GMTDatesList.map((date) =>
      format(date, 'yyyy-MM-dd')
    );
    const uniqueDatesList: string[] = [];
    formattedDatesList.forEach((date: string) => {
      if (!uniqueDatesList.includes(date)) {
        uniqueDatesList.push(date);
      }
    });

    return uniqueDatesList;
  }
}
