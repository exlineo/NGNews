import { TestBed, inject } from '@angular/core/testing';

import { BaseHrefIntercepteur } from './basehref-intercepteur';

describe('BaseHrefIntercepteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseHrefIntercepteur]
    });
  });

  it('should be created', inject([BaseHrefIntercepteur], (service: BaseHrefIntercepteur) => {
    expect(service).toBeTruthy();
  }));
});
