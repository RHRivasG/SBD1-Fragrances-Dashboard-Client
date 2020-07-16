import { TestBed } from '@angular/core/testing';

import { ImageService } from './image-service.service';

describe('ImageServiceService', () => {
  let service: ImageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
