import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {VillaComponent} from "./villas/villa/villa.component";
import {RegisterComponent} from "./core/auth/register/register.component";
import {LoginComponent} from "./core/auth/login/login.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "villas/:id", component: VillaComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
