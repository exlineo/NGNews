import { TestBed, inject } from '@angular/core/testing';

import { SecuriteIntercepteurService } from './securite-intercepteur.service';

describe('SecuriteIntercepteurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecuriteIntercepteurService]
    });
  });

  it('should be created', inject([SecuriteIntercepteurService], (service: SecuriteIntercepteurService) => {
    expect(service).toBeTruthy();
  }));
});
