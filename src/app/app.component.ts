import { Component, HostListener, OnInit } from '@angular/core';
import { RoutingService } from './services/routing-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.routingService.isNotFound.subscribe((isNotFound) => {
      this.isNotFound = isNotFound;
    });

    this.routingService.isLogPage.subscribe((isLogPage) => {
      this.isNotFound = isLogPage;
    });

    this.routingService.isPayerPage.subscribe((isPayerPage) => {
      this.isPayerPage = isPayerPage;
    });

    this.routingService.isAdminPage.subscribe((isAdminPage) => {
      this.isAdminPage = isAdminPage;
    })
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos == max) {
      //Do your action here
      this.isTop = false;
    } else {
      this.isTop = true;
    }
  }

  title = 'html';
  isNotFound = false;
  isLogPage = false;
  isPayerPage = false;
  isTop = true;
  isAdminPage = false;

  scroll() {
    window.scroll({ top: 0 });
  }
}
