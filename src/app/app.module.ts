import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordComponent } from './components/password/password.component';
import { IndicatorComponent } from './components/indicator/indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent,
    IndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
