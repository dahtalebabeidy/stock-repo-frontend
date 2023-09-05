import { TestBed } from '@angular/core/testing';

import { EtagereService } from './etagere.service';

describe('EtagereService', () => {
  let service: EtagereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtagereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
