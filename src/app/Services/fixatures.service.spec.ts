import { TestBed } from '@angular/core/testing';

import { FixaturesService } from './fixatures.service';

describe('FixaturesService', () => {
  let service: FixaturesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixaturesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
