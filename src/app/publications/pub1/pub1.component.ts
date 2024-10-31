import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-pub1',
  templateUrl: './pub1.component.html',
  styleUrls: ['./pub1.component.css'],
})
export class Pub1Component implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.toggle();
  }

  slide: number = 1;

  toggle() {
    setTimeout(() => {
      this.slide < 4 ? this.slide++ : this.slide = 1;
      this.toggle();
    }, 3000);
  }
}
