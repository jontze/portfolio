import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[portfolioMouseOver]',
})
export class MouseOverDirective {
  @Output() isOver = new EventEmitter<boolean>();

  @HostListener('mouseenter') onMouseEnter() {
    this.isOver.emit(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isOver.emit(false);
  }
}
