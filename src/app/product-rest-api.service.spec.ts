import { TestBed, inject } from '@angular/core/testing';

import { ProductRestApiService } from './product-rest-api.service';

describe('ProductRestApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductRestApiService]
    });
  });

  it('should be created', inject([ProductRestApiService], (service: ProductRestApiService) => {
    expect(service).toBeTruthy();
  }));
});
