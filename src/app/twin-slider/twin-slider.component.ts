import { Component, Input } from '@angular/core'

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
  title = 'twin-slider'
  handleSelectLeft = (e: any) => {
    console.log(this.leftCol[parseInt(e)])
  }
  handleSelectRight = (e: any) => {
    console.log(this.rightCol[parseInt(e)])
  }
}
