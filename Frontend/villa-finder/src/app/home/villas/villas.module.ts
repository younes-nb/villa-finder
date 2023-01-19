import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VillasService} from "./villas.service";
import {VillasComponent} from "./villas.component";
import {VillaComponent} from "./villa/villa.component";
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [VillasComponent, VillaComponent],
  providers: [VillasService],
    imports: [
        CommonModule,
        MatPaginatorModule,
        RouterLink
    ],
  exports: [VillasComponent]
})
export class VillasModule {
}
