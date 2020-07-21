import { TestBed } from '@angular/core/testing';

import { RawCriteriaService } from './raw-criteria.service';

describe('RawCriteriaService', () => {
  let service: RawCriteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawCriteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
