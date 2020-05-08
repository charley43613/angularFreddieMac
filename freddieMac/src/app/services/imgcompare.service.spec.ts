import { TestBed } from '@angular/core/testing';

import { ImgcompareService } from './imgcompare.service';

describe('ImgcompareService', () => {
  let service: ImgcompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgcompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
