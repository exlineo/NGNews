import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnewsAuteurComponent } from './anews-auteur.component';

describe('AnewsAuteurComponent', () => {
  let component: AnewsAuteurComponent;
  let fixture: ComponentFixture<AnewsAuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnewsAuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnewsAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
