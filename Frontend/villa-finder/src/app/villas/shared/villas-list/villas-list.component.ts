import {Component, Input, OnInit} from '@angular/core';
import {Villa} from "../../../../types";
import {VillasService} from "../villas.service";

@Component({
  selector: 'app-villas-list',
  templateUrl: './villas-list.component.html'
})
export class VillasListComponent implements OnInit {
  @Input() villas: Villa[] = [];
  @Input() isInProfile: boolean = false
  pageSlice: Villa[] = this.villas;

  constructor(private villasService: VillasService) {
  }

  ngOnInit(): void {
    if (this.villas.length === 0) {
      this.villasService.getAll().subscribe(result => {
        this.villas = result;
        this.pageSlice = this.villas.slice(0, 9);
      });
    }
    this.pageSlice = this.villas.slice(0, 9)
  }

  getVillas() {
    this.villasService.getAll().subscribe(result => {
      this.villas = result;
    });
  }

  onPageChange(event: Villa[]): void {
    this.pageSlice = event;
  }
}
