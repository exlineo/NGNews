import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnewsDetailComponent } from './anews-detail.component';

describe('AnewsDetailComponent', () => {
  let component: AnewsDetailComponent;
  let fixture: ComponentFixture<AnewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
