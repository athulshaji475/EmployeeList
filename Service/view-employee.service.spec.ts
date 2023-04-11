import { TestBed } from '@angular/core/testing';

import { ViewEmployeeService } from './view-employee.service';

describe('ViewEmployeeService', () => {
  let service: ViewEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
