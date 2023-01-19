import {Component, OnInit} from '@angular/core';
import {VillasService} from "./villas.service";
import {Villa} from "../../../types/villa";

@Component({
  selector: 'app-villas',
  templateUrl: './villas.component.html',
  styleUrls: ['./villas.component.scss']
})
export class VillasComponent implements OnInit {
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
