import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OneNewsPageComponent } from './one-news-page.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {NewsService} from '../news.service';
import {APP_BASE_HREF} from '@angular/common';
import {HomePageComponent} from '../home-page/home-page.component';

describe('OneNewsPageComponent', () => {
  let component: OneNewsPageComponent;
  let fixture: ComponentFixture<OneNewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OneNewsPageComponent,
      ],
      imports: [
        HttpClientTestingModule,
        HttpClientModule,
        AppRoutingModule,
        HomePageComponent
      ],
      providers: [
        NewsService,
        HttpClientModule,
        HttpHandler,
        HttpClient,
        HttpTestingController
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneNewsPageComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
