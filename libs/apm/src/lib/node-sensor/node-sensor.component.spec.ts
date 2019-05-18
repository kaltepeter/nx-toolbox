import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSensorComponent } from './node-sensor.component';

describe('NodeSensorComponent', () => {
  let component: NodeSensorComponent;
  let fixture: ComponentFixture<NodeSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
