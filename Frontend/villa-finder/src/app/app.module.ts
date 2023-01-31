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
import {FontAwesomeModule, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faGithub, faTelegram, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {
  faXmark,
  faLocationDot,
  faBed,
  faMoneyBill,
  faEnvelope,
  faPhone,
  faPlus,
  faPen,
  faTrash
} from "@fortawesome/free-solid-svg-icons"
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
import {LoginComponent} from './core/auth/login/login.component';
import {RegisterComponent} from './core/auth/register/register.component';
import {ProfileComponent} from './users/profile/profile.component';
import {HttpRequestInterceptor} from "./shared/http.interceptor";
import {FooterModule} from "./core/footer/footer.module";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
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
    NavbarModule,
    FooterModule,
    MatCheckboxModule
  ],
  providers: [FormatTextService, LocationService, HttpRequestInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub,
      faTelegram,
      faInstagram,
      faLinkedin,
      faXmark,
      faLocationDot,
      faBed,
      faMoneyBill,
      faEnvelope,
      faPhone,
      faPlus,
      faPen,
      faTrash
    );
  }
}
