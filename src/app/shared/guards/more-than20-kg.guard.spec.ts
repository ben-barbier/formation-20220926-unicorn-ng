import { TestBed } from '@angular/core/testing';

import { MoreThan20KgGuard } from './more-than20-kg.guard';

describe('MoreThan20KgGuard', () => {
  let guard: MoreThan20KgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MoreThan20KgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
