import {Component, Input} from '@angular/core';
import {Coordinate} from "../../../types";

@Component({
  selector: 'app-villa-map',
  templateUrl: './villa-map.component.html',
  styleUrls: ['./villa-map.component.scss']
})
export class VillaMapComponent {
  @Input() coordinate: Coordinate = {} as Coordinate;
}
