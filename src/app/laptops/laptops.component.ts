import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { laptopsService } from '../services/laptops.service';
import { laptopType } from '../types/laptopType';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
})
export class LaptopsComponent implements OnInit {
  constructor(private laptopsService: laptopsService) {
    this.laptops = this.laptopsService.laptopsList;
  }

  ngOnInit(): void {
    // this.laptops = this.laptopsService.laptopsList;
    this.laptopsFiltred = this.laptops;
  }

  @ViewChild('val') searchIN!:ElementRef;

  laptops: laptopType[] = []
  laptopsFiltred: laptopType[] = []
  

  onSearchFinder(value: string) {
    // this.phonesFiltred = this.phones.filter(phone => phone.name.toLowerCase() === value.toLowerCase());
    this.laptopsFiltred = this.laptops.filter(laptop => laptop.name.toLowerCase().match(value));
  }

  resetView() {
    this.searchIN.nativeElement.value = "";
    this.laptopsFiltred = this.laptops;
  }

  onBtnFinders(char: string) {
    this.laptopsFiltred = this.laptops.filter(laptop => laptop.name[0].toLowerCase() === char.toLowerCase());
  }
}
