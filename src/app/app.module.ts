import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NewsService } from './news.service';
import { NewsPageComponent } from './news-page/news-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AppRoutingModule} from './app-routing.module';
import { OneNewsPageComponent } from './one-news-page/one-news-page.component';
import {CarFilterPipe} from './news-filter.pipe';
import { OneNewsPreviewComponent } from './one-news-preview/one-news-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    HomePageComponent,
    OneNewsPageComponent,
    CarFilterPipe,
    OneNewsPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
