import { TestBed, inject } from '@angular/core/testing';

import { KorisniciService } from './korisnici.service';

describe('KorisniciService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KorisniciService]
    });
  });

  it('should be created', inject([KorisniciService], (service: KorisniciService) => {
    expect(service).toBeTruthy();
  }));
});
