import { TestBed } from '@angular/core/testing';

import { AdminservicesService } from './adminservices.service';

describe('AdminservicesService', () => {
  let service: AdminservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
