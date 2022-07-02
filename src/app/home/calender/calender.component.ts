import { Component, Input, OnInit } from '@angular/core';
import { TodoInterface } from '../../libs/types/todo.interface';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  @Input() todoList: TodoInterface[];
  constructor() {}

  ngOnInit(): void {}
}
