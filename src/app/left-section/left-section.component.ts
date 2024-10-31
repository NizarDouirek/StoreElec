import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css'],
})
export class LeftSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  min: number = 250;
  max: number = 750;

  afficherPriceMin(price: any) {
    this.min = price;
  }

  afficherPriceMax(price: any) {
    this.max = price;
  }
}
