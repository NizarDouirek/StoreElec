import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub3',
  templateUrl: './pub3.component.html',
  styleUrls: ['./pub3.component.css'],
})
export class Pub3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.onSlide();
  }

  slide: number = 1;

  onSlide() {
    setTimeout(() => {
      this.slide < 12 ? this.slide++ : (this.slide = 1);
      this.onSlide();
    }, 3000);
  }
}
