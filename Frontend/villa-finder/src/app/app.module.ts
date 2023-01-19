import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './home/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {VillasModule} from "./home/villas/villas.module";
import {FooterComponent} from './footer/footer.component';
import {FontAwesomeModule, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faGithub, faTelegram, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGithub, faTelegram, faInstagram, faLinkedin);
  }
}
