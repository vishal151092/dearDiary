import { TestBed, inject } from '@angular/core/testing';

import { DiaryServiceService } from './diary-service.service';

describe('DiaryServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiaryServiceService]
    });
  });

  it('should be created', inject([DiaryServiceService], (service: DiaryServiceService) => {
    expect(service).toBeTruthy();
  }));
});
