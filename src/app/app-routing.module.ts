import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from "./pages/contact/contact.component";
import {RouterModule, Routes} from "@angular/router";
import {AboutComponent} from "./pages/about/about.component";
import {PortfolioComponent} from "./pages/portfolio/portfolio.component";
import {ServicesComponent} from "./pages/services/services.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'portfolio', component: PortfolioComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
