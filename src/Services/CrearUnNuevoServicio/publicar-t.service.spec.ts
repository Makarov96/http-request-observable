import { TestBed } from '@angular/core/testing';

import { PublicarTService } from './publicar-t.service';

describe('PublicarTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicarTService = TestBed.get(PublicarTService);
    expect(service).toBeTruthy();
  });
});
