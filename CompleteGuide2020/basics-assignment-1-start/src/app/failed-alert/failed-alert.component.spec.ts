import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedAlertComponent } from './failed-alert.component';

describe('FailedAlertComponent', () => {
  let component: FailedAlertComponent;
  let fixture: ComponentFixture<FailedAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailedAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
