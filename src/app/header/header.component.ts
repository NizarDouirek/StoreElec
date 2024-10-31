import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { RoutingService } from '../services/routing-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private routingService: RoutingService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.headerService.sendLengthPanier.subscribe((value) => {
      this.countPanier = value;
    });

    this.headerService.sendLengthSave.subscribe((value) => {
      this.countSave = value;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    var isDone = false;
    if (window.innerWidth > 900 && !isDone) {
      this.smWindow = false;
      isDone = true;
    }
  }

  searchMode: boolean = false;
  saveMode: boolean = false;
  disSaveMode: boolean = false;
  panierMode: boolean = false;
  countSave: number = this.headerService.enregistrementList.length;
  countPanier: number = this.headerService.panierList.length;
  smWindow: boolean = false;

  toggleSearchMode() {
    this.searchMode = !this.searchMode;
  }

  toggleSaveMode() {
    this.disSaveMode = this.saveMode;

    setTimeout(() => {
      this.saveMode = !this.saveMode;
    }, 200);
  }

  togglePanierMode() {
    this.panierMode = !this.panierMode;
  }

  signOrLog(options: string) {
    this.routingService.signOrLog.next(options);
  }

  showSmWindow() {
    this.smWindow = !this.smWindow;
  }
}
