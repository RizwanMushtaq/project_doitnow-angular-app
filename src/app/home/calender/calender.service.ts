import { Injectable } from '@angular/core';
import {
  startOfWeek,
  endOfMonth,
  endOfWeek,
  startOfDay,
  addDays,
  startOfMonth,
} from 'date-fns';

@Injectable()
export class CalenderService {
  public getWeek(start: Date = new Date()) {
    let date = startOfWeek(startOfDay(start));
    return function () {
      const week = [...Array(7)].map((_, i) => addDays(date, i));
      date = addDays(week[6], 1);
      return week;
    };
  }

  public getMonth(start: Date) {
    let month: any = [];

    function getWeek(start: Date = new Date()) {
      // let date = startOfWeek(startOfDay(start), { weekStartsOn: 1 });
      let date = startOfDay(start);

      return function () {
        const week = [...Array(7)].map((_, i) => addDays(date, i));
        date = addDays(week[6], 1);
        return week;
      };
    }

    return function () {
      const endDate = startOfDay(
        endOfWeek(endOfMonth(start), { weekStartsOn: 1 })
      );
      let startDateOfMonth = startOfWeek(startOfMonth(start), {
        weekStartsOn: 1,
      });

      for (
        let start = startDateOfMonth;
        start < endDate;
        start = addDays(start, 7)
      ) {
        month.push(getWeek(start)());
      }

      return month;
    };
  }
}
