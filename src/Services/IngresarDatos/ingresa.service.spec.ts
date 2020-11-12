import { TestBed } from '@angular/core/testing';

import { IngresaService } from './ingresa.service';

describe('IngresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngresaService = TestBed.get(IngresaService);
    expect(service).toBeTruthy();
  });
});
