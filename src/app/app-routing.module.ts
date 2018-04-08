import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  //http://localhost:4200/cars
  { path: '', component: HomePageComponent },
  { path: 'cars', component: CarsPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
