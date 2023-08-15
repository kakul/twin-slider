import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import { TwinSliderComponent } from "./twin-slider.component"
import { ColumnComponent } from "./column/column.component"

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [TwinSliderComponent, ColumnComponent],
  exports: [TwinSliderComponent]
})

export class TwinSliderModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faChevronRight)
  }
}
