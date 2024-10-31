import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { enregistrementType } from 'src/app/types/enregistrementType';
import { panierType } from 'src/app/types/panierType';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.link = "/" + this.title + "/" + this.index.toString() + "/" + this.type;
    console.log(this.link);
  }
  
  @Input() image!: string;
  @Input() title!: string;
  @Input() price!: number;
  @Input() type!: string;
  @Input() index!: number;
  
  link: string = ""

  addToSave() {
    var item = new enregistrementType(this.title, this.type, this.index);
    this.headerService.addItemEnregistrement(item)
    this.headerService.sendLengthSave.next(this.headerService.enregistrementList.length);
  }

  addToPanier() {
    var item = new panierType(this.title, this.image, 1, this.type);
    this.headerService.addItemPanierList(item);
    this.headerService.sendLengthPanier.next(this.headerService.panierList.length);
  }

}
