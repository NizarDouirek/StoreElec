import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';
import { searchType } from 'src/app/types/searchType';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  @Output() disSearchModel = new EventEmitter<boolean>();
  @ViewChild('search') valueSearch!: ElementRef;

  searchList: searchType[] = this.headerService.searchList;

  star: boolean = false;

  startToggle(i: number) {
    this.headerService.toggleEtoile(i);
  }

  addItem(value: string) {
    this.headerService.addItemSearch(new searchType(value, false));
    this.valueSearch.nativeElement.value = '';
  }

  deleteItem(i: number) {
    this.headerService.deleteItemSearch(i);
  }

  disableSearchMode(event?: any) {
    if (event != null && event.key == 'Escape') {
      this.disSearchModel.emit(true);
    } else if (event == null) this.disSearchModel.emit(true);
  }
}
