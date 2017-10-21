import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsEditFormComponent } from './friends-edit-form.component';

describe('FriendsEditFormComponent', () => {
  let component: FriendsEditFormComponent;
  let fixture: ComponentFixture<FriendsEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
