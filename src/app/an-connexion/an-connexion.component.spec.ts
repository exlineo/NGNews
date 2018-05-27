import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnConnexionComponent } from './an-connexion.component';

describe('AnConnexionComponent', () => {
  let component: AnConnexionComponent;
  let fixture: ComponentFixture<AnConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
