import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersEditComponent } from './subscribers-edit.component';

describe('SubscribersEditComponent', () => {
  let component: SubscribersEditComponent;
  let fixture: ComponentFixture<SubscribersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
