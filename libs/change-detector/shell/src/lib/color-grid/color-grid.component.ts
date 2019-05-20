import { Component, OnInit } from '@angular/core';
import * as Color from 'color';
import { ColorBlock } from '@ka/common/ui';
import { of, Observable, interval, range } from 'rxjs';
import { map, take, scan, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'cd-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.scss']
})
export class ColorGridComponent implements OnInit {
  colorBlocks$: Observable<ColorBlock[]>;
  private _currentColor = 0;

  get currentColor() {
    return this._currentColor;
  }

  set currentColor(value) {
    if (value >= 255) {
      this._currentColor = 0;
    } else {
      this._currentColor = Math.floor(value);
    }
  }

  constructor() {
    this.setColors();
  }

  ngOnInit() {
    // interval(500)
    //   .pipe(map(i => i))
    //   .subscribe(console.log);
    // setInterval(() => {
    //   this.setColors();
    // }, 500);

    setInterval(() => {
      this.colorBlocks$ = range(1, 2000).pipe(
        // tap(console.log),
        mergeMap(_ =>
          of({
            color: Color.rgb(
              this.currentColor,
              this.currentColor,
              this.currentColor
            )
          })
        ),
        scan<ColorBlock>((acc, curr) => [...acc, curr], [])
      );
      this.setColors();
    }, 1000);
  }

  setColors() {
    // let blocks = [];
    // for (let i = 0; i < 2000; i++) {
    //   blocks.push({
    //     color: Color.rgb(
    //       this.currentColor,
    //       this.currentColor,
    //       this.currentColor
    //     )
    //   });
    // }
    // this.colorBlocks$ = new Observable<ColorBlock[]>(observer =>
    //   observer.next([...blocks])
    // );
    this.currentColor += 20;
  }
}
