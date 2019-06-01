import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { Component } from '@angular/core';

@Component({
  selector: 'cd-nav',
  template: ``
})
class MockNavigationComponent {
}

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellComponent, MockNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain nav component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('cd-nav')).toBeTruthy();
  });
});
