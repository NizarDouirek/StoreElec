import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing-service.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private routingServcie: RoutingService, private routingService: RoutingService) {
    this.routingServcie.isLogPage.next(true);
  }

  ngOnInit(): void {
    this.routingServcie.signOrLog.subscribe(option => {
      option == 'login' ? this.haveAccount = true : this.haveAccount = false;
    })
  }

  haveAccount:boolean = false;

  onDestroy() {
    this.routingServcie.isLogPage.next(false);
  }

  account(e: any) {
    console.log(e)
  }
}
