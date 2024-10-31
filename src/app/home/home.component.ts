import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { laptopsService } from '../services/laptops.service';
import { PhonesService } from '../services/phones.service';
import { phoneType } from '../types/phonesType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private phonesService: PhonesService, private laptopsService: laptopsService) {}

  ngOnInit(): void {
    this.cards = [...this.phonesService.phonesList, ...this.laptopsService.laptopsList];
  }

  cards: phoneType[] = [];


  showPhone(i: number, name: string) {
    this.router.navigate([i, name, 'phone']);
  }
}
