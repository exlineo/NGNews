import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnewsRelativeComponent } from './anews-relative.component';

describe('AnewsRelativeComponent', () => {
  let component: AnewsRelativeComponent;
  let fixture: ComponentFixture<AnewsRelativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnewsRelativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnewsRelativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
