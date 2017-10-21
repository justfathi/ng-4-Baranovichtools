import { TestBed, inject } from '@angular/core/testing';

import { FriendsEditService } from './friends-edit.service';

describe('FriendsEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsEditService]
    });
  });

  it('should be created', inject([FriendsEditService], (service: FriendsEditService) => {
    expect(service).toBeTruthy();
  }));
});
