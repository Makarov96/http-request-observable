import { TestBed } from '@angular/core/testing';

import { ServiceuserService } from './serviceuser.service';

describe('ServiceuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceuserService = TestBed.get(ServiceuserService);
    expect(service).toBeTruthy();
  });
});
