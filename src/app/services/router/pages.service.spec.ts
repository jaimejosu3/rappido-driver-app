import { TestBed } from '@angular/core/testing';

import { PagesService } from './pages.service';

describe('PagesServiceService', () => {
  let service: PagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
