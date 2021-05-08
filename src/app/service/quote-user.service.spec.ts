import { TestBed } from '@angular/core/testing';

import { QuoteUserService } from './quote-user.service';

describe('QuoteUserService', () => {
  let service: QuoteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
