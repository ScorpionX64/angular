import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAlertComponent } from './container-alert.component';

describe('ContainerAlertComponent', () => {
  let component: ContainerAlertComponent;
  let fixture: ComponentFixture<ContainerAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
