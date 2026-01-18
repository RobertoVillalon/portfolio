import { TestBed } from '@angular/core/testing';

import { AcademicinformationService } from './academicinformation-service';

describe('AcademicinformationService', () => {
  let service: AcademicinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
