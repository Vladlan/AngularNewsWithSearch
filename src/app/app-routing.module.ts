import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {Routes, RouterModule} from '@angular/router';
import {OneNewsPageComponent} from './one-news-page/one-news-page.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'news/:id/:headLine', component: OneNewsPageComponent },
  { path: 'news', component: NewsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
