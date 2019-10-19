import { TestBed } from '@angular/core/testing';

import { AlphaService } from './alpha.service';

describe('AlphaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlphaService = TestBed.get(AlphaService);
    expect(service).toBeTruthy();
  });
});
