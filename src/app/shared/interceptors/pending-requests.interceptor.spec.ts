import { TestBed } from '@angular/core/testing';

import { PendingRequestsInterceptor } from './pending-requests.interceptor';

describe('PendingRequestsInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PendingRequestsInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: PendingRequestsInterceptor = TestBed.inject(PendingRequestsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
