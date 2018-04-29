import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { MuskComponent } from './musk/musk.component';

import { NumbersService } from './numbers.service';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    MuskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumbersService],
  bootstrap: [AppComponent]

})
export class AppModule { }
