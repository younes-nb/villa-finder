import {Component, Input} from '@angular/core';
import {Villa} from "../../../types/villa";
import {FormatTextService} from "../../shared/format-text.service";

@Component({
  selector: 'app-villa-card',
  templateUrl: './villa-card.component.html',
  styleUrls: ['./villa-card.component.scss']
})
export class VillaCardComponent {
  @Input() villa: Villa = {} as Villa;

  constructor(private appService: FormatTextService) {
  }

  numLatinToFa(n: number) {
    return this.appService.numLatinToFa(n.toString());
  }
}
