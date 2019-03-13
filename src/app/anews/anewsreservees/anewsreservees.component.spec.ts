import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnewsreserveesComponent } from './anewsreservees.component';

describe('AnewsreserveesComponent', () => {
  let component: AnewsreserveesComponent;
  let fixture: ComponentFixture<AnewsreserveesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnewsreserveesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnewsreserveesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
