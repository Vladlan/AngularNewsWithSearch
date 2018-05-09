import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNewsPreviewComponent } from './one-news-preview.component';

describe('OneNewsPreviewComponent', () => {
  let component: OneNewsPreviewComponent;
  let fixture: ComponentFixture<OneNewsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneNewsPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneNewsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
