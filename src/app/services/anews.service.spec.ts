import { TestBed, inject } from '@angular/core/testing';

import { AnewsService } from './anews.service';

describe('AnewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnewsService]
    });
  });

  it('should be created', inject([AnewsService], (service: AnewsService) => {
    expect(service).toBeTruthy();
  }));
});
