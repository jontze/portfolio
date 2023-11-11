import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[portfolioMousePosition]',
})
export class MousePositionDirective implements OnInit {
  private mouse = {
    x: 0,
    y: 0,
  };
  private containerSize = {
    width: 0,
    height: 0,
  };
  @Output() mouseMoveOnElement = new EventEmitter<{
    xPixel: number;
    yPixel: number;
  }>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.initContainer();
  }

  private initContainer() {
    this.containerSize.width = this.el.nativeElement.clientWidth;
    this.containerSize.height = this.el.nativeElement.clientHeight;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect == null) {
      return;
    }

    // Calculate mouse position
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const isMouseInElement =
      x < this.containerSize.width &&
      x > 0 &&
      y < this.containerSize.height &&
      y > 0;

    if (isMouseInElement) {
      this.mouse.x = x;
      this.mouse.y = y;
      const cardX =
        -(this.el.nativeElement.getBoundingClientRect().left - rect.left) +
        this.mouse.x;
      const cardY =
        -(this.el.nativeElement.getBoundingClientRect().top - rect.top) +
        this.mouse.y;
      this.mouseMoveOnElement.emit({ xPixel: cardX, yPixel: cardY });
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.initContainer();
  }
}
