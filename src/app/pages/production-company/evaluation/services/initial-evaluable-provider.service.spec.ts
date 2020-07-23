import { TestBed } from '@angular/core/testing';

import { InitialEvaluableProviderService } from './initial-evaluable-provider.service';

describe('InitialEvaluableProviderService', () => {
  let service: InitialEvaluableProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialEvaluableProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
