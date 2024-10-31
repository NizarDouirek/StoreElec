import { Injectable } from '@angular/core';
import { laptopType } from '../types/laptopType';

@Injectable({
  providedIn: 'root',
})
export class laptopsService {
  constructor() {}

  laptopsList: laptopType[] = [
    new laptopType(
      'lenovo v-130',
      450,
      '../../assets/images/mypc1.png',
      'laptop'
    ),
    new laptopType(
      'dell xps G13',
      1100,
      '../../assets/publication/dell3.png',
      'laptop'
    ),
    new laptopType(
      'dell latitude',
      950,
      '../../assets/publication/dell4.png',
      'laptop'
    ),
    new laptopType(
      'hp elite book G3',
      670,
      '../../assets/publication/hp1.png',
      'laptop'
    ),
    new laptopType(
      'hp elite book G5',
      830,
      '../../assets/publication/hp2.png',
      'laptop'
    ),
    new laptopType(
      'Hp Pavilion 15',
      930,
      '../../assets/publication/hp5.png',
      'laptop'
    ),
    new laptopType(
      'Victus Hp',
      870,
      '../../assets/publication/hp6.png',
      'laptop'
    ),
    new laptopType(
      'Hp Pavilion 13',
      770,
      '../../assets/publication/hp8.png',
      'laptop'
    ),
    new laptopType(
      'Thinkbook Plus',
      330,
      '../../assets/publication/lenovo1.png',
      'laptop'
    ),
    new laptopType(
      'Lenovo Ideapad',
      500,
      '../../assets/publication/lenovo4.png',
      'laptop'
    ),
    new laptopType(
      'Lenovo v-130',
      400,
      '../../assets/publication/lenovo5.jpg',
      'laptop'
    ),
    new laptopType(
      'Lenovo yoga 7i',
      990,
      '../../assets/publication/lenovo7.png',
      'laptop'
    ),
  ];
}
