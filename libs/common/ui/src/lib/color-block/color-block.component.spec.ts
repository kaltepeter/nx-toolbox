import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBlockComponent } from './color-block.component';
import * as Color from 'color';
import { Component } from '@angular/core';

@Component({
  template: `
    <ui-color-block [color]="color"></ui-color-block>`
})
class TestHostComponent {
  color: Color = Color.rgb(255,0,0);
}

describe('ColorBlockComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorBlockComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('should set color', () => {
    const colorBlock: HTMLElement = fixture.nativeElement.querySelector('.color-block');
    const bgColor = colorBlock.style.backgroundColor;
    expect(bgColor).toBe(Color.rgb(255,0,0).toString());
  });
});
