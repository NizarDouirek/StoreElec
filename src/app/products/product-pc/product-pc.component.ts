import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { enregistrementType } from 'src/app/types/enregistrementType';
import { panierType } from 'src/app/types/panierType';

@Component({
  selector: 'app-product-pc',
  templateUrl: './product-pc.component.html',
  styleUrls: ['./product-pc.component.css'],
})
export class ProductPcComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  pathImage: string = '../../../assets/images/mypc1.png';
  changeImage(url: string) {
    this.pathImage = url;
  }

  addToPanier() {
    var item = new panierType("lenovo v-130 15-ikb", this.pathImage, 1, 'pc');
    this.headerService.addItemPanierList(item);
    this.headerService.sendLengthPanier.next(this.headerService.panierList.length);
  }

  addToSave() {
    var item = new enregistrementType('lenovo v-130 15-ikb', this.pathImage, 1);
    this.headerService.addItemEnregistrement(item)
    this.headerService.sendLengthSave.next(
      this.headerService.enregistrementList.length
    );
  }
}
