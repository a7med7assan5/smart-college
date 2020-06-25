import { TestBed } from '@angular/core/testing';

import { SemesterserviceService } from './semesterservice.service';

describe('SemesterserviceService', () => {
  let service: SemesterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemesterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
