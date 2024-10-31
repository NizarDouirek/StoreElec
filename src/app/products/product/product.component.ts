import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  pathImage: string = '';
  showImage: boolean = false;

  getImage(url: any): void {
    this.pathImage = url;
    console.log(url);
    this.showImage = true;
  }

  hideImage() {
    this.showImage = false;
  }
}
