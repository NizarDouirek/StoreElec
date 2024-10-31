import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../services/routing-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private serviceRouting: RoutingService) { 
    this.serviceRouting.isAdminPage.next(true)
  }

  ngOnInit(): void {
  }

}
