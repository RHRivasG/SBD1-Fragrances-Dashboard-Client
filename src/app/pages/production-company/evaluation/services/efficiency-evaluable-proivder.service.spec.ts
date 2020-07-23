import { TestBed } from '@angular/core/testing';

import { EfficiencyEvaluableProivderService } from './efficiency-evaluable-proivder.service';

describe('EfficiencyEvaluableProivderService', () => {
  let service: EfficiencyEvaluableProivderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EfficiencyEvaluableProivderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
