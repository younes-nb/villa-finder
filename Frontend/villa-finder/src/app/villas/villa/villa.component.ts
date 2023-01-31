import {Component, OnInit} from '@angular/core';
import {FormatTextService} from "../../shared/format-text.service";
import {ActivatedRoute} from "@angular/router";
import {VillasService} from "../shared/villas.service";
import {Coordinate, Villa} from "../../../types";

@Component({
  selector: 'app-villa',
  templateUrl: './villa.component.html',
  styleUrls: ['./villa.component.scss']
})
export class VillaComponent implements OnInit {
  villa!: Villa;
  villaId!: number;
  coordinate!: Coordinate;

  constructor(private formatTextService: FormatTextService, private route: ActivatedRoute, private villasService: VillasService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.villaId = params['id']);
    this.villasService.get(this.villaId.toString()).subscribe(result => {
      this.villa = result;
      this.coordinate = {lat: result.latitude, lng: result.longitude};
    });
  }

  numLatinToFa(n: number) {
    return this.formatTextService.numLatinToFa(n.toString());
  }

  phoneLatinToFa(phone: string) {
    return this.formatTextService.numLatinToFa(phone.replace('+', '')) + '+';
  }
}
