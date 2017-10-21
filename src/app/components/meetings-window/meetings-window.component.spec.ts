import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsWindowComponent } from './meetings-window.component';

describe('MeetingsWindowComponent', () => {
  let component: MeetingsWindowComponent;
  let fixture: ComponentFixture<MeetingsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
