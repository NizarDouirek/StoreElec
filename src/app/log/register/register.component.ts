import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Location } from '@angular/common'
import { RoutingService } from 'src/app/services/routing-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private location: Location, private routingService: RoutingService) { }

  ngOnInit(): void {
  }
  @ViewChild('password') in1!: ElementRef;
  @ViewChild('cpassowrd') in2!: ElementRef;

  @Output() haveAccount = new EventEmitter<boolean>();

  showHide1 = 'password';
  showHide2 = 'password';

  passwordToggle(item: number) {
    this.showHide1 == 'password' && item == 1 ? this.showHide1 = 'text' : this.showHide1 = 'password';
    this.showHide2 == 'password' && item == 2 ? this.showHide2 = 'text' : this.showHide2 = 'password';
    if (item == 1) this.in1.nativeElement.focus();
    if(item == 2) this.in2.nativeElement.focus();
  }

  goBack() {
    this.location.back();
    this.routingService.isLogPage.next(false);
  }

  iHaveAccount() {
    this.haveAccount.emit(true);
  }
}
