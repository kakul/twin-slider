import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'twin-slider',
  templateUrl: './twin-slider.component.html',
  styleUrls: [
    './twin-slider.component.scss'
  ]
})
export class TwinSliderComponent {
  @Input() leftCol: any[]
  @Input() rightCol: any[]
  @Output() leftEmitter = new EventEmitter<string>;
  title = 'twin-slider'
  handleSelectLeft = (e: any) => {
    console.log(this.leftCol[parseInt(e)])
    this.leftEmitter.emit(e)
  }
  handleSelectRight = (e: any) => {
    console.log(this.rightCol[parseInt(e)])
  }
}
