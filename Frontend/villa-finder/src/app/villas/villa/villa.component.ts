import {Component, OnInit} from '@angular/core';
import {Villa} from "../../../types/villa";
import {FormatText} from "../../shared/format-text.service";
import {ActivatedRoute} from "@angular/router";
import {VillasService} from "../shared/villas.service";

@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.scss']
})
export class VillaComponent implements OnInit {
  villa!: Villa;
  villaId!: number;

  constructor(private appService: FormatText, private route: ActivatedRoute, private villasService: VillasService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.villaId = params['id']);
    this.villasService.getVilla(this.villaId.toString()).subscribe(result => {
      this.villa = result;
    });
  }

  numLatinToFa(n: number) {
    return this.appService.numLatinToFa(n.toString());
  }
}
