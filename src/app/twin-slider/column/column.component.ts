import { Component, Input, ElementRef, ViewChild } from '@angular/core'
import KeenSlider, { KeenSliderInstance } from 'keen-slider'

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: [
    '../../../../node_modules/keen-slider/keen-slider.min.css',
    './column.component.scss'
  ]
})
export class ColumnComponent {
  @Input() slides : any[] = []
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>
  slider: KeenSliderInstance | null  = null
  selectedIndex: number = 0
  ngAfterViewInit() {
    
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      mode: "snap",
      slides: {
        
        perView: 3,
        origin: 'center'
      },
      loop: true,
      vertical: true,
      created: ({slides, track}) => {
        if(slides.length > 1) {
          const slide = slides[this.selectedIndex]
          slide.classList.add('selected')
        }
      },
      animationStarted: ({slides}) => {
        const slide = slides[this.selectedIndex]
        slide.classList.remove('selected')
      },
      animationEnded: ({track: {details: {rel}}, slides}) => {
        this.selectedIndex = rel
        const slide = slides[this.selectedIndex]
        slide.classList.add('selected')
      }
    })
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
  title = 'column'
}
