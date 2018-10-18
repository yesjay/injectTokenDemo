import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InjectTokenTestComponent } from './inject-token-test/inject-token-test.component';
import { NgZoneTestComponent } from './ng-zone-test/ng-zone-test.component';

@NgModule({
  declarations: [
    AppComponent,
    InjectTokenTestComponent,
    NgZoneTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
