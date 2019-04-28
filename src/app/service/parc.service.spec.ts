import { TestBed } from '@angular/core/testing';

import { ParcService } from './parc.service';

describe('ParcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParcService = TestBed.get(ParcService);
    expect(service).toBeTruthy();
  });
});
