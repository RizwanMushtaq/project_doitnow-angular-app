import { Component, Input, OnInit } from '@angular/core';
import { TodoInterface } from '../../libs/types/todo.interface';
import { CalenderService } from './calender.service';
import { addDays, subDays } from 'date-fns';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  @Input() todoList: TodoInterface[];
  @Input() uniqueDatesList: string[];
  month: Date[][];
  monthFlatList: Date[];
  monthHeader: Date;
  today: Date;
  selectedDay: Date;

  constructor(private calenderService: CalenderService) {}

  ngOnInit(): void {
    this.month = this.calenderService.getMonth(new Date())();
    this.monthHeader = this.month[3][0];
    this.today = new Date();
    this.selectedDay = new Date();
    this.monthFlatList = this.month.flat();
    console.log(this.month);
    console.log(this.monthFlatList);
  }

  nextMonth() {
    this.monthHeader = addDays(this.monthHeader, 30);
    this.month = this.calenderService.getMonth(this.monthHeader)();
  }

  previousMonth() {
    this.monthHeader = subDays(this.monthHeader, 30);
    this.month = this.calenderService.getMonth(this.monthHeader)();
  }

  selectDay(event: MouseEvent) {
    const dayDiv = event.target as HTMLElement;
    const day = +dayDiv.innerText;
    const month = this.monthHeader.getMonth();
    const year = this.monthHeader.getFullYear();

    this.selectedDay = new Date(year, month, day);
  }
}
