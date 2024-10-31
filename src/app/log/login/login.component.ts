import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Location } from '@angular/common';
import { RoutingService } from 'src/app/services/routing-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private location: Location,
    private routingService: RoutingService
  ) {}

  @Output() haveAccount = new EventEmitter<boolean>();

  ngOnInit(): void {}

  @ViewChild('form') form!: ElementRef;

  afficherForm() {
    console.log(this.form);
  }

  goBack() {
    this.location.back();
    this.routingService.isLogPage.next(false);
  }
  notHaveAccount() {
    this.haveAccount.emit(false);
  }
}
