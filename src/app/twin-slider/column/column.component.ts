import { Component, Input, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core'
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
  @Output() slideEmitter = new EventEmitter<string>;
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement>
  slider: KeenSliderInstance | null  = null
  selectedIndex: number = 0
  ngAfterViewInit() {
    const mutationPlugin = (slider: KeenSliderInstance) => {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          slider.update()
        })
      })
      const config = {childList: true}
      slider.on("created", () => {
        observer.observe(slider.container, config)
      })
      slider.on("destroyed", () => {
        observer.disconnect()
      })
    }
    this.slider = new KeenSlider(
      this.sliderRef.nativeElement, {
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
          this.slideEmitter.emit(this.selectedIndex.toString())
        }
      },
      [mutationPlugin]
    )
  }
  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
  title = 'column'
}
