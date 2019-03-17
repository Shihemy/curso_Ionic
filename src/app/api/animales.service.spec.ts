import { TestBed } from '@angular/core/testing';

import { AnimalesService } from './animales.service';

describe('AnimalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimalesService = TestBed.get(AnimalesService);
    expect(service).toBeTruthy();
  });
});
