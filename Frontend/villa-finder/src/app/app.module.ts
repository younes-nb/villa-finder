import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './core/home/home.component';
import {HeaderComponent} from './core/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VillasModule} from "./villas/villas.module";
import {FooterComponent} from './core/footer/footer.component';
import {FontAwesomeModule, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faGithub, faTelegram, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {FormatTextService} from "./shared/format-text.service";
import {LocationService} from "./shared/location.service";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {NavbarModule} from "./core/navbar/navbar.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    NgxSliderModule,
    FormsModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    VillasModule,
    FontAwesomeModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    LoadingBarHttpClientModule,
    NavbarModule
  ],
  providers: [FormatTextService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faTelegram, faInstagram, faLinkedin, faXmark);
  }
}
