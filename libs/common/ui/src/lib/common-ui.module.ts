import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorBlockComponent } from './color-block/color-block.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ColorBlockComponent],
  exports: [ColorBlockComponent]
})
export class CommonUiModule {}
