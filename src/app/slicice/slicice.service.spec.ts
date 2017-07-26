import { TestBed, inject } from '@angular/core/testing';

import { SliciceService } from './slicice.service';

describe('SliciceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SliciceService]
    });
  });

  it('should be created', inject([SliciceService], (service: SliciceService) => {
    expect(service).toBeTruthy();
  }));
});
