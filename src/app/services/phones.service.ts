import { Injectable } from '@angular/core';
import { phoneType } from '../types/phonesType';

@Injectable({
  providedIn: 'root',
})
export class PhonesService {
  constructor() {}

  phonesList: phoneType[] = [
    new phoneType('Iphone 12', 1000, '../../assets/images/iphone.png', "phone"),
    new phoneType('Iphone 12', 1000, '../../assets/images/iphone1.png', "phone"),
    new phoneType('Xioami note 8', 240, '../../assets/images/redmi_note_8.png', "phone"),
    new phoneType('realme 7i', 300, '../../assets/images/realme_7i.png', "phone"),
    new phoneType('Iphone 12', 1120, '../../assets/images/iphone2.png', "phone"),
    new phoneType('Oppo reno 6', 480, '../../assets/images/oppo_reno_6.png', "phone"),
    new phoneType('Oppo reno 6', 500, '../../assets/images/oppo_reno_6.png', "phone"),
    new phoneType('Nova 9', 620, '../../assets/images/nova_9.png', "phone"),
    new phoneType('Oppo  A17', 300, '../../assets/images/OPPO-A17.png', "phone"),
    new phoneType('Realme 9i', 360, '../../assets/images/realme_9i.png', "phone"),
    new phoneType('huawei y9', 210, '../../assets/images/huawei_y9_2018.png', "phone"),
    new phoneType('Honor', 210, '../../assets/publication/honor1.png', "phone"),
  ];
}
