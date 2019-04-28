import { TestBed } from '@angular/core/testing';

import { BilletUtilisateurService } from './billet-utilisateur.service';

describe('BilletUtilisateurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BilletUtilisateurService = TestBed.get(BilletUtilisateurService);
    expect(service).toBeTruthy();
  });
});
