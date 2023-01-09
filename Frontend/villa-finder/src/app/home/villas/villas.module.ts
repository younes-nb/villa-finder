import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VillasService} from "./villas.service";
import {VillasComponent} from "./villas.component";
import {VillaComponent} from "./villa/villa.component";


@NgModule({
  declarations: [VillasComponent, VillaComponent],
  providers: [VillasService],
  imports: [
    CommonModule,
  ],
  exports: [VillasComponent]
})
export class VillasModule {
}
