import { TestBed } from '@angular/core/testing';

import { LaveService } from './lave.service';

describe('LaveService', () => {
  let service: LaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
