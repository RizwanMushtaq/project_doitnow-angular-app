import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  async ngOnInit(): Promise<void> {
    this.homeService.getTodos().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }
}
