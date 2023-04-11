import { TestBed } from '@angular/core/testing';

import { EditdataService } from './editdata.service';

describe('EditdataService', () => {
  let service: EditdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
