import { TestBed } from '@angular/core/testing';

import { EvaluationStorageService } from './evaluation-storage.service';

describe('EvaluationStorageService', () => {
  let service: EvaluationStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
