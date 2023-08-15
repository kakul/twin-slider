import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { TwinSliderModule } from './twin-slider/twin-slider.module'

import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    TwinSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
