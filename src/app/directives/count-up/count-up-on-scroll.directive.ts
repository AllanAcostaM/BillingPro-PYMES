import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CountUp } from 'countup.js';

@Directive({
  selector: '[appCountUpOnScroll]',
})
export class CountUpOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() duration: number = 2;
  @Input() suffix: string = '';
  @Input() decimals: number = 0;
  @Input() threshold: number = 0.5;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.startCount();
            this.observer.unobserve(entry.target);
          }
        }
      },
      { threshold: this.threshold }
    );
    this.observer.observe(this.el.nativeElement);
  }

  private startCount(): void {
    const text = this.el.nativeElement.textContent?.trim() || '0';
    const endValue = parseFloat(text.replace(/[^0-9.\-]/g, '')) || 0;

    const countUp = new CountUp(this.el.nativeElement, endValue, {
      duration: this.duration,
      suffix: this.suffix,
      decimalPlaces: this.decimals,
      separator: ',',
    });
    if (!countUp.error) {
      countUp.start();
    }
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
