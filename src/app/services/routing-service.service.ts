import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { }

  isNotFound = new Subject<boolean>();
  isLogPage = new Subject<boolean>();
  isPayerPage = new Subject<boolean>();

  signOrLog = new BehaviorSubject<string>('singUp');

  isAdminPage = new Subject<boolean>();

}
