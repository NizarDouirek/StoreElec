import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header.service';
import { enregistrementType } from 'src/app/types/enregistrementType';

@Component({
  selector: 'app-enregistre',
  templateUrl: './enregistre.component.html',
  styleUrls: ['./enregistre.component.css'],
})
export class EnregistrerComponent implements OnInit {
  constructor(private headerService: HeaderService, private router: Router) {}

  ngOnInit(): void {}

  @Input() disableSaveMode: boolean = false;

  enregistrementList: enregistrementType[] =
    this.headerService.enregistrementList;

  deleteItem(i: number) {
    this.headerService.deleteItemEnregistrement(i);
    this.headerService.sendLengthSave.next(
      this.headerService.enregistrementList.length
    );
  }

  goToItem(title: string, type: string, index: number) {
    var link = index + '/' + title + '/' + type;
    this.router.navigate([link]);
  }
}
