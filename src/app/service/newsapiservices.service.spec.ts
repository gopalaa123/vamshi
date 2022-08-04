import { TestBed } from '@angular/core/testing';

import { NewsapiservicesService } from './newsapiservices.service';

describe('NewsapiservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsapiservicesService = TestBed.get(NewsapiservicesService);
    expect(service).toBeTruthy();
  });
});
