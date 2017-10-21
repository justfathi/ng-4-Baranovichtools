import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingEditFormComponent } from './meeting-edit-form.component';

describe('MeetingEditFormComponent', () => {
  let component: MeetingEditFormComponent;
  let fixture: ComponentFixture<MeetingEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
