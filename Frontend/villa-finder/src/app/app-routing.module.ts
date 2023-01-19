import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {VillaComponent} from "./home/villas/villa/villa.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "villas/:id", component: VillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
