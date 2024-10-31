import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  constructor(private headerService: HeaderService, private router: Router) {}

  ngOnInit(): void {}

  @Output() disPanierMode = new EventEmitter();
  isPanierMode: boolean = false;
  panierList = this.headerService.panierList;

  DisablePanierMode() {
    this.isPanierMode = true;
    setTimeout(() => {
      this.disPanierMode.emit(false);
    }, 200);
  }

  changeQuantite(index: number, num: number) {
    // this.quantite == 0 && num != 1 ? this.quantite = 0 : this.quantite += num;
    this.headerService.changeQuantite(index, num);
  }

  deleteItem(index: number) {
    this.headerService.deleteItemPanierList(index);
    this.headerService.sendLengthPanier.next(
      this.headerService.panierList.length
    );
  }

  goToShow(i: number) {
    var link =
      '/' + i + '/' + this.panierList[i].title + '/' + this.panierList[i].type;
    this.router.navigate([link]);
    this.DisablePanierMode();
  }
}
