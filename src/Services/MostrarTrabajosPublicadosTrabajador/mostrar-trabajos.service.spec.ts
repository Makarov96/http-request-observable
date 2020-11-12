import { TestBed } from '@angular/core/testing';

import { MostrarTrabajosService } from './mostrar-trabajos.service';

describe('MostrarTrabajosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarTrabajosService = TestBed.get(MostrarTrabajosService);
    expect(service).toBeTruthy();
  });
});
