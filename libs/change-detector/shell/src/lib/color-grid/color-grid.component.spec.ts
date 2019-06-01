import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorGridComponent } from './color-grid.component';
import { Component, Input } from '@angular/core';
import { ColorBlock } from '@ka/common/ui';
import * as Color from 'color';

@Component({
  selector: 'ui-color-block',
  template: ``
})
class MockUiColorBlockComponent implements ColorBlock {
  @Input() color: Color;

}

@Component({
  template: `<cd-color-grid></cd-color-grid>`
})
class TestHostComponent {
}

describe('ColorGridComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHostComponent, ColorGridComponent, MockUiColorBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain color block component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul')).toBeTruthy();
  });
});
