import { TestBed } from '@angular/core/testing';

import { ShipmentOptionsService } from './shipment-options.service';

describe('ShipmentOptionsService', () => {
  let service: ShipmentOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
