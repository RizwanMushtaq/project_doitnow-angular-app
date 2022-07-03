import { Component, Input, OnInit } from '@angular/core';
import { TodoInterface } from '../../libs/types/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList: TodoInterface[];

  constructor() {}

  ngOnInit(): void {}

  editTodoItem() {
    console.log('edit todo item');
  }

  deleteTodoItem() {
    console.log('delete todo item');
  }
}
