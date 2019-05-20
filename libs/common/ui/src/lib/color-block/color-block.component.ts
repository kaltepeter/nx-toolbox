import { Component, OnInit, Input } from '@angular/core';
import * as Color from 'color';

@Component({
  selector: 'ui-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss']
})
export class ColorBlockComponent implements OnInit {
  @Input() color: Color = Color.rgb(255, 255, 255);

  constructor() {}

  ngOnInit() {}
}
