import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VillasService} from "./shared/villas.service";
import {VillaComponent} from "./villa/villa.component";
import {RouterLink} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {PaginatorModule} from "./shared/paginator/paginator.module";
import {VillaCardComponent} from './shared/villa-card/villa-card.component';
import { VillasListComponent } from './shared/villas-list/villas-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import {NavbarModule} from "../core/navbar/navbar.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {GoogleMapsModule} from "@angular/google-maps";
import { VillaMapComponent } from './villa-map/villa-map.component';
import {FooterModule} from "../core/footer/footer.module";


@NgModule({
  declarations: [VillaComponent, VillaCardComponent, VillasListComponent, GalleryComponent, VillaMapComponent],
  providers: [VillasService],
    imports: [
        CommonModule,
        MatPaginatorModule,
        RouterLink,
        PaginatorModule,
        NavbarModule,
        FontAwesomeModule,
        GoogleMapsModule,
        FooterModule,
    ],
    exports: [VillasListComponent, VillaCardComponent]
})
export class VillasModule {
}
