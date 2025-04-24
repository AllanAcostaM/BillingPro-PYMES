import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Directive({
  selector: '[appVanillaTilt]',
  standalone: true,
})
export class VanillaTiltDirective implements AfterViewInit, OnDestroy {
  @Input() tiltOptions: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    VanillaTilt.init(
      this.el.nativeElement,
      this.tiltOptions || {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      }
    );
  }

  ngOnDestroy() {
    if (this.el.nativeElement.vanillaTilt) {
      this.el.nativeElement.vanillaTilt.destroy();
    }
  }
}
