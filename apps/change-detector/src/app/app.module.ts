import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeDetectorShellModule} from '@ka/change-detector/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ChangeDetectorShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
