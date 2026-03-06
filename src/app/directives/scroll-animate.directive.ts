import { Directive, ElementRef, input, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]',
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  animation = input<string>('fade-up', { alias: 'appScrollAnimate' });
  delay = input<number>(0);

  private observer: IntersectionObserver | null = null;

  ngOnInit() {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('sa-hidden');
    element.style.setProperty('--sa-delay', `${this.delay()}ms`);

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.remove('sa-hidden');
            element.classList.add('sa-visible', this.animation());
            this.observer?.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
