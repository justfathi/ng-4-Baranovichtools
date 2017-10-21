import { TestBed, inject } from '@angular/core/testing';

import { NewsEditService } from './news-edit.service';

describe('NewsEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsEditService]
    });
  });

  it('should be created', inject([NewsEditService], (service: NewsEditService) => {
    expect(service).toBeTruthy();
  }));
});
