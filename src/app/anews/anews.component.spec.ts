import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnewsComponent } from './anews.component';

describe('AnewsComponent', () => {
  let component: AnewsComponent;
  let fixture: ComponentFixture<AnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
