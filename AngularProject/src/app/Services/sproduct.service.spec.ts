import { TestBed } from '@angular/core/testing';

import { SProductService } from './sproduct.service';

describe('SProductService', () => {
  let service: SProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
