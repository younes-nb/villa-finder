import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VillasService} from "./shared/villas.service";
import {VillaComponent} from "./villa/villa.component";
import {RouterLink} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PaginatorModule} from "./paginator/paginator.module";
import {VillaCardComponent} from './villa-card/villa-card.component';
import { VillasListComponent } from './shared/villas-list/villas-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import {NavbarModule} from "../core/navbar/navbar.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [VillaComponent, VillaCardComponent, VillasListComponent, GalleryComponent],
  providers: [VillasService],
    imports: [
        CommonModule,
        MatPaginatorModule,
        RouterLink,
        PaginatorModule,
        NavbarModule,
        FontAwesomeModule
    ],
  exports: [VillasListComponent]
})
export class VillasModule {
}
