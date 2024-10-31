import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing-service.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit, OnDestroy {
  constructor(private routingService: RoutingService) {
    this.routingService.isNotFound.next(true);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routingService.isNotFound.next(false);
  }
}
