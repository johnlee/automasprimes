import { TestBed } from '@angular/core/testing';

import { PrimesService } from './primes.service';

describe('PrimesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimesService = TestBed.get(PrimesService);
    expect(service).toBeTruthy();
  });
});
