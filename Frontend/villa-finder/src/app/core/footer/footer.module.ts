import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer.component";
import {RouterLink} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
