import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EarnComponent } from './earn/earn.component';
import { LogComponent } from './log/log.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    EarnComponent,
    LogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
