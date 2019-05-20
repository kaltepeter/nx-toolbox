import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ShellComponent } from './shell.component';
import { ColorGridComponent } from './color-grid/color-grid.component';
import {CommonUiModule} from '@ka/common/ui';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    LayoutModule,

    MatToolbarModule,

    MatButtonModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule,
    CommonUiModule
  ],
  declarations: [NavigationComponent, ShellComponent, ColorGridComponent],
  entryComponents: [ShellComponent],
  exports: [ShellComponent]
})
export class ChangeDetectorShellModule {}
