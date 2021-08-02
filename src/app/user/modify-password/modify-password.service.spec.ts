import { TestBed } from '@angular/core/testing';

import { ModifyPasswordService } from './modify-password.service';

describe('ModifyPasswordService', () => {
  let service: ModifyPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
