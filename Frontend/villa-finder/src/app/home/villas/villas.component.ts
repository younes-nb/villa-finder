import {Component, OnInit} from '@angular/core';
import {VillasService} from "./villas.service";
import {Villa} from "../../../types/villa";

@Component({
  selector: 'app-villas',
  templateUrl: './villas.component.html',
  styleUrls: ['./villas.component.scss']
})
export class VillasComponent implements OnInit {
  villas: Villa[] = [];

  constructor(private villasService: VillasService) {
  }

  ngOnInit(): void {
    this.villas = this.villasService.getVillas();
  }

}
