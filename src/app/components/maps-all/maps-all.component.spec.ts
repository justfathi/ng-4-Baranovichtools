import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsAllComponent } from './maps-all.component';

describe('MapsAllComponent', () => {
  let component: MapsAllComponent;
  let fixture: ComponentFixture<MapsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
