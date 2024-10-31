import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing-service.service';

@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.css'],
})
export class PayerComponent implements OnInit, OnDestroy {
  constructor(
    private location: Location,
    private routingService: RoutingService
  ) {
    this.routingService.isPayerPage.next(true);
  }

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.routingService.isPayerPage.next(false);
  }
}
