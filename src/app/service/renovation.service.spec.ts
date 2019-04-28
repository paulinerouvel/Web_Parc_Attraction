import { TestBed } from '@angular/core/testing';

import { RenovationService } from './renovation.service';

describe('RenovationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenovationService = TestBed.get(RenovationService);
    expect(service).toBeTruthy();
  });
});
