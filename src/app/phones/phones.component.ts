import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PhonesService } from '../services/phones.service';
import { phoneType } from '../types/phonesType';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
})

export class PhonesComponent implements OnInit {
  constructor(private phonesService: PhonesService) {
    this.phones = this.phonesService.phonesList;
  }

  ngOnInit(): void {
    // this.phones = this.phonesService.phonesList;
    this.phonesFiltred = this.phones;
  }

  @ViewChild('val') searchIN!: ElementRef;

  phones: phoneType[] = [];
  phonesFiltred: phoneType[] = []

  onSearchFinder(value: string) {
    // this.phonesFiltred = this.phones.filter(phone => phone.name.toLowerCase() === value.toLowerCase());
    this.phonesFiltred = this.phones.filter(phone => phone.name.toLowerCase().match(value))
    console.log(this.phonesFiltred);
  }

  resetView() {
    this.searchIN.nativeElement.value = "";
    this.phonesFiltred = this.phones;
    console.log(this.phonesFiltred);
  }

  onBtnFinders(char: string) {
    this.phonesFiltred = this.phones.filter(phone => phone.name[0].toLowerCase() === char.toLowerCase());
    console.log(this.phonesFiltred);
  }
}
