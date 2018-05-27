import { TestBed, async, inject } from '@angular/core/testing';

import { BlocEditionGuard } from './bloc-edition.guard';

describe('BlocEditionGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlocEditionGuard]
    });
  });

  it('should ...', inject([BlocEditionGuard], (guard: BlocEditionGuard) => {
    expect(guard).toBeTruthy();
  }));
});
