import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VillasService} from "./villas.service";
import {VillasComponent} from "./villas.component";
import {VillaComponent} from "./villa/villa.component";
import {RouterLink} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PaginatorModule} from "./paginator/paginator.module";
import {VillaCardComponent} from './villa-card/villa-card.component';


@NgModule({
  declarations: [VillasComponent, VillaComponent, VillaCardComponent],
  providers: [VillasService],
  imports: [
    CommonModule,
    MatPaginatorModule,
    RouterLink,
    PaginatorModule
  ],
  exports: [VillasComponent]
})
export class VillasModule {
}
