import { TestBed } from '@angular/core/testing';

import { ForeignContactsService } from './foreign-contacts.service';

describe('ForeignContactsService', () => {
  let service: ForeignContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForeignContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
