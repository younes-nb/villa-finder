import {Component, Input} from '@angular/core';
import {FormatTextService} from "../../shared/format-text.service";
import {Villa} from "../../../types";

@Component({
  selector: 'app-villa-card',
  templateUrl: './villa-card.component.html',
  styleUrls: ['./villa-card.component.scss']
})
export class VillaCardComponent {
  @Input() villa: Villa = {} as Villa;

  constructor(private formatTextService: FormatTextService) {
  }

  numLatinToFa(n: number) {
    return this.formatTextService.numLatinToFa(n.toString());
  }
}
