import { TestBed, inject } from '@angular/core/testing';

import { SecuriteIntercepteur } from './securite.intercepteur';

describe('SecuriteIntercepteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuriteIntercepteur]
    });
  });

  it('should be created', inject([SecuriteIntercepteur], (service: SecuriteIntercepteur) => {
    expect(service).toBeTruthy();
  }));
});
