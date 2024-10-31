import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { enregistrementType } from '../types/enregistrementType';
import { panierType } from '../types/panierType';
import { searchType } from '../types/searchType';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private toastr: ToastrService) {}

  // panier
  panierList: panierType[] = [
    new panierType('iphone 12', '../../assets/images/iphone.png', 1, "phone"),
    new panierType('nova 9', '../../assets/images/nova_9.png', 1, "phone"),
    new panierType('realme 9i', '../../assets/images/realme_9i.png', 1, "phone"),
  ];

  sendLengthPanier = new Subject<number>();
  sendLengthSave = new Subject<number>();

  deleteItemPanierList(i: number) {
    this.toastr.error(this.panierList[i].title + ' is deleted');
    this.panierList.splice(i, 1);
  }

  addItemPanierList(item: panierType) {
    var isExist = false;

    this.panierList.filter((element) => {
      if (element.title == item.title && element.image == item.image) {
        this.toastr.warning('this element is already added');
        isExist = true;
      }
    });

    if (!isExist) {
      this.panierList.push(item);
      this.toastr.success(item.title + ' added succecfully');
    }
  }

  changeQuantite(i: number, num: number) {
    if (this.panierList[i].quantite == 0 && num != 1)
      this.panierList[i].quantite = 0;
    else this.panierList[i].quantite += num;
  }

  // enregistrement
  enregistrementList: enregistrementType[] = [
    new enregistrementType('redmi note 8', 'phone', -1),
    new enregistrementType('lenovo v-130 15ikb', 'laptop', -1),
    new enregistrementType('Huawei Y9 2018', 'phone', -1),
    new enregistrementType('sumsung A10', 'phone', -1),
  ];

  addItemEnregistrement(item: enregistrementType) {
    var isExist = false;
    this.enregistrementList.filter((element) => {
      if (element.title == element.title && element.index == item.index) {
        this.toastr.warning('this element is already added');
        isExist = true;
      }
    });
    if (!isExist) {
      this.enregistrementList.push(item);
      this.toastr.success(item.title + ' is added succecfully');
    }
  }

  deleteItemEnregistrement(i: number) {
    this.toastr.error(this.enregistrementList[i].title + ' is deleted');
    this.enregistrementList.splice(i, 1);
    }

  // search
  searchList: searchType[] = [
    new searchType('Xiaomi', true),
    new searchType('Nokia', false),
    new searchType('ulefon', false),
    new searchType('sumsung', false),
  ];

  toggleEtoile(i: number) {
    this.searchList[i].isStar = !this.searchList[i].isStar;
  }

  deleteItemSearch(i: number) {
    // this.toastr.error(this.searchList[i].title + ' is deleted');
    this.searchList.splice(i, 1);
  }

  addItemSearch(item: searchType) {
    if (this.searchList.length == 5) this.searchList.pop();
    this.searchList.unshift(item);
    // this.toastr.success(item.title + ' is added succecfully');
  }
}
