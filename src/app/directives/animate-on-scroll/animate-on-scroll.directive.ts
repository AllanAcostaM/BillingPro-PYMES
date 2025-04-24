import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input('appAnimateOnScroll') animationClasses: string = '';
  @Input() threshold: number = 0.5;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const anims = this.animationClasses
              ? this.animationClasses.split(' ')
              : ['animate__jackInTheBox'];
            const el = e.target as HTMLElement;
            el.classList.add('animate__animated', ...anims);
            this.observer.unobserve(el);
          }
        });
      },
      { threshold: this.threshold }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
