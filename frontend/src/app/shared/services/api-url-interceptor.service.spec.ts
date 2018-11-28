import { TestBed } from '@angular/core/testing';

import { ApiUrlInterceptorService } from './api-url-interceptor.service';

describe('AuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiUrlInterceptorService = TestBed.get(ApiUrlInterceptorService);
    expect(service).toBeTruthy();
  });
});
