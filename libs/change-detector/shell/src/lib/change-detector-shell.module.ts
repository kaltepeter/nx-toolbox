import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ShellComponent } from './shell.component';
import { ColorGridComponent } from './color-grid/color-grid.component';
import {CommonUiModule} from '@ka/common/ui';
import {MaterialModule} from '@ka/shared';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forRoot([
      {path: 'rxjs', component: ColorGridComponent},
      {path: '', pathMatch: 'full', redirectTo: '/rxjs'}
    ]),

    LayoutModule,
    MaterialModule,
    CommonUiModule
  ],
  declarations: [NavigationComponent, ShellComponent, ColorGridComponent],
  entryComponents: [ShellComponent],
  exports: [ShellComponent]
})
export class ChangeDetectorShellModule {}
