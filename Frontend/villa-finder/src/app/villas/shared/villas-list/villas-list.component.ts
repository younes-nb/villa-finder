import {Component, OnInit} from '@angular/core';
import {VillasService} from "../villas.service";
import {Villa} from "../../../../types";

@Component({
  selector: 'app-villas-list',
  templateUrl: './villas-list.component.html'
})
export class VillasListComponent implements OnInit {
  villas!: Villa[];
  pageSlice: Villa[] | undefined;

  constructor(private villasService: VillasService) {
  }

  ngOnInit(): void {
    this.villasService.getVillas().subscribe(result => {
      this.villas = result;
      this.pageSlice = this.villas.slice(0, 9);
    });
  }

  onPageChange(event: Villa[]): void {
    this.pageSlice = event;
  }
}
