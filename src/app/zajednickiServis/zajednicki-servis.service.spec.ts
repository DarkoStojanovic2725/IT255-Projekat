import { TestBed, inject } from '@angular/core/testing';

import { ZajednickiServisService } from './zajednicki-servis.service';

describe('ZajednickiServisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZajednickiServisService]
    });
  });

  it('should be created', inject([ZajednickiServisService], (service: ZajednickiServisService) => {
    expect(service).toBeTruthy();
  }));
});
