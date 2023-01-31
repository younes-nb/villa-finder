import {Component, Input} from '@angular/core';
import {FormatTextService} from "../../../shared/format-text.service";
import {Villa} from "../../../../types";
import {VillasService} from "../villas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-villa-card',
  templateUrl: './villa-card.component.html',
  styleUrls: ['./villa-card.component.scss']
})
export class VillaCardComponent {
  @Input() villa: Villa = {} as Villa;
  @Input() isInProfile: boolean = false;

  constructor(private formatTextService: FormatTextService, private villasService: VillasService, private router: Router) {
  }

  deleteVilla(): void {
    this.villasService.delete(this.villa.id)
      .subscribe({
        next: () => {
          this.router.navigate(['/profile']);
        },
        error: () => alert('عملیات ناموفق بود.')
      });
  }

  numLatinToFa(n: number) {
    return this.formatTextService.numLatinToFa(n.toString());
  }
}
