import { TestBed } from '@angular/core/testing';

import { ListProductServiceService } from './list-product-service.service';

describe('ListProductServiceService', () => {
  let service: ListProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
