import { TestBed, inject } from '@angular/core/testing';

import { MeetingsEditService } from './meetings-edit.service';

describe('MeetingsEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingsEditService]
    });
  });

  it('should be created', inject([MeetingsEditService], (service: MeetingsEditService) => {
    expect(service).toBeTruthy();
  }));
});
