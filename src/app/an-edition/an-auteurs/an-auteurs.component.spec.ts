import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnAuteursComponent } from './an-auteurs.component';

describe('AnAuteursComponent', () => {
  let component: AnAuteursComponent;
  let fixture: ComponentFixture<AnAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
