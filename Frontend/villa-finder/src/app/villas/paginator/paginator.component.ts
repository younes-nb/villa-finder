import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {Villa} from "../../../types/villa";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  @Input() villas: Villa[] = {} as Villa[];
  @Output() pageChanged: EventEmitter<Array<Villa>> = new EventEmitter<Array<Villa>>;
  pageSlice: Villa[] = [];
  pageSize: number = 9;
  pageSizeOptions: number[] = [3, 6, 9, 12, 15];
  showFirstLastButtons: boolean = true;

  onPageChange(event: PageEvent) {
    const startIndex: number = event.pageIndex * event.pageSize;
    let endIndex: number = startIndex + event.pageSize;
    if (endIndex > this.villas.length) {
      endIndex = this.villas.length;
    }
    this.pageSlice = this.villas.slice(startIndex, endIndex);
    this.pageChanged.emit(this.pageSlice);
  }
}
