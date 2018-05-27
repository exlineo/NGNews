import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnEditionComponent } from './an-edition.component';

describe('AnEditionComponent', () => {
  let component: AnEditionComponent;
  let fixture: ComponentFixture<AnEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
