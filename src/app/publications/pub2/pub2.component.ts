import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pub2',
  templateUrl: './pub2.component.html',
  styleUrls: ['./pub2.component.css'],
})
export class Pub2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.toggle();
  }

  slide: number = 2;

  toggle() {
    setTimeout(() => {
      this.slide < 6 ? this.slide++ : (this.slide = 1);
      this.toggle();
    }, 3100);
  }
}
