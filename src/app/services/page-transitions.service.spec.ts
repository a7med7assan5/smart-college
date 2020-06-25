import { TestBed } from '@angular/core/testing';

import { PageTransitionsService } from './page-transitions.service';

describe('PageTransitionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageTransitionsService = TestBed.get(PageTransitionsService);
    expect(service).toBeTruthy();
  });
});
